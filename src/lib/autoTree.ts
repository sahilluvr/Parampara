// ── Auto family tree ─────────────────────────────────────────────
// People add relatives by saying how they're related to *them* ("Mother",
// "Dadi", "Chacha", "Son"…). That's enough to draw the tree — nobody should
// have to wire up "parent 1 / parent 2 / spouse" dropdowns.
//
// inferTree() turns relation-to-me into parent/spouse links. Links set
// explicitly (e.g. "Add Rohit's son" from the tree) always win. Where a
// connecting person is missing (siblings but no parents yet) a dashed
// placeholder ("Add father") is created so the shape is right and the gap
// is one tap to fill.

import type { FamilyMember } from "@/lib/store";

export type TreeMember = FamilyMember & { placeholder?: string; placeholderOf?: string; isSelf?: boolean };

type Canon =
  | "self" | "father" | "mother" | "spouse" | "brother" | "sister" | "son" | "daughter"
  | "pgf" | "pgm" | "mgf" | "mgm" | "chacha" | "chachi" | "bua" | "fufa" | "mama" | "mami" | "maasi" | "masad"
  | "fil" | "mil" | "bil" | "sil" | "soninlaw" | "dil" | "grandson" | "granddaughter" | "cousin" | "other";

const ALIASES: Record<string, Canon> = {
  self: "self", me: "self", myself: "self", "you": "self",
  father: "father", papa: "father", dad: "father", pitaji: "father", abba: "father",
  mother: "mother", maa: "mother", mom: "mother", mummy: "mother", mataji: "mother", ammi: "mother",
  wife: "spouse", husband: "spouse", spouse: "spouse", patni: "spouse", pati: "spouse",
  brother: "brother", bhai: "brother", bhaiya: "brother", veer: "brother",
  sister: "sister", didi: "sister", behen: "sister", bhen: "sister",
  son: "son", beta: "son", daughter: "daughter", beti: "daughter",
  grandfather: "pgf", dada: "pgf", dadaji: "pgf", "grandfather (dad's side)": "pgf",
  grandmother: "pgm", dadi: "pgm", dadiji: "pgm", "grandmother (dad's side)": "pgm",
  nana: "mgf", nanaji: "mgf", "grandfather (mum's side)": "mgf", "grandfather (mom's side)": "mgf",
  nani: "mgm", naniji: "mgm", "grandmother (mum's side)": "mgm", "grandmother (mom's side)": "mgm",
  chacha: "chacha", tau: "chacha", tauji: "chacha", uncle: "chacha", "chacha / tau": "chacha",
  chachi: "chachi", tai: "chachi", taiji: "chachi", aunt: "chachi",
  bua: "bua", fufa: "fufa", phupha: "fufa",
  mama: "mama", mami: "mami", maami: "mami", maasi: "maasi", mausi: "maasi", masi: "maasi", masad: "masad", mausa: "masad",
  "father-in-law": "fil", sasur: "fil", "mother-in-law": "mil", saas: "mil",
  "brother-in-law": "bil", jija: "bil", jijaji: "bil", devar: "bil", saala: "bil",
  "sister-in-law": "sil", bhabhi: "sil", nanad: "sil", saali: "sil",
  "son-in-law": "soninlaw", damad: "soninlaw", "daughter-in-law": "dil", bahu: "dil",
  grandson: "grandson", pota: "grandson", nati: "grandson", granddaughter: "granddaughter", poti: "granddaughter", natin: "granddaughter",
  cousin: "cousin",
};

export function canonRelation(rel?: string): Canon {
  const r = (rel || "").trim().toLowerCase();
  if (ALIASES[r]) return ALIASES[r];
  if (r.includes("'s ")) return "other"; // "Rohit's son" — linked explicitly
  return "other";
}

export function inferTree(members: FamilyMember[], opts: { selfName?: string; selfUserId?: string } = {}): { people: TreeMember[]; selfId: string } {
  const people: TreeMember[] = members.map(m => ({ ...m, parentIds: m.parentIds ? [...m.parentIds] : undefined }));
  const byId = new Map(people.map(p => [p.id, p]));
  const explicitParents = new Set(people.filter(p => p.parentIds && p.parentIds.length).map(p => p.id));
  const explicitSpouse = new Set(people.filter(p => p.spouseId).map(p => p.id));

  // Who is "me"?
  let self = people.find(p => canonRelation(p.relation) === "self")
    || people.find(p => opts.selfUserId && (p as FamilyMember & { userId?: string; user_id?: string }).userId === opts.selfUserId)
    || people.find(p => opts.selfName && p.name.trim().toLowerCase() === opts.selfName.trim().toLowerCase());
  if (!self) {
    self = { id: "__self__", name: opts.selfName || "You", relation: "Self", role: "Admin", religion: "", region: "", initials: (opts.selfName || "You").slice(0, 2).toUpperCase(), color: "saffron", joinedAt: "", isSelf: true };
    people.push(self);
    byId.set(self.id, self);
  }
  self.isSelf = true;

  const groups = new Map<Canon, TreeMember[]>();
  for (const p of people) {
    if (p === self) continue;
    const c = canonRelation(p.relation);
    if (!groups.has(c)) groups.set(c, []);
    groups.get(c)!.push(p);
  }
  const g = (c: Canon) => groups.get(c) || [];
  const first = (c: Canon) => g(c)[0];

  let phCount = 0;
  const placeholder = (label: string, addRelation: string, of: string): TreeMember => {
    const ph: TreeMember = { id: `__ph${phCount++}`, name: label, relation: addRelation, role: "", religion: "", region: "", initials: "+", color: "saffron", joinedAt: "", placeholder: addRelation, placeholderOf: of };
    people.push(ph); byId.set(ph.id, ph);
    return ph;
  };
  const marry = (a?: TreeMember, b?: TreeMember) => {
    if (!a || !b || a === b) return;
    if (!explicitSpouse.has(a.id) && !a.spouseId) a.spouseId = b.id;
    if (!explicitSpouse.has(b.id) && !b.spouseId) b.spouseId = a.id;
  };
  const setParents = (child: TreeMember | undefined, ...parents: (TreeMember | undefined)[]) => {
    if (!child || explicitParents.has(child.id)) return;
    const ids = parents.filter(Boolean).map(p => p!.id).filter(id => id !== child.id);
    if (ids.length && !(child.parentIds && child.parentIds.length)) child.parentIds = ids.slice(0, 2);
  };
  // Parents of X, creating a placeholder if X has none but needs them
  const parentsOf = (x: TreeMember, labelDad: string, relDad: string, ofId: string): [TreeMember | undefined, TreeMember | undefined] => {
    const ids = x.parentIds || [];
    if (ids.length) return [byId.get(ids[0]), ids[1] ? byId.get(ids[1]) : undefined];
    const ph = placeholder(labelDad, relDad, ofId);
    x.parentIds = [ph.id];
    return [ph, undefined];
  };

  // Me, my spouse, my parents
  const spouse = first("spouse");
  marry(self, spouse);
  const father = first("father"), mother = first("mother");
  marry(father, mother);
  setParents(self, father, mother);

  // Siblings share my parents (placeholder parent if none recorded)
  const siblings = [...g("brother"), ...g("sister")];
  if (siblings.length && !(self.parentIds && self.parentIds.length)) parentsOf(self, "Add father", "Father", self.id);
  for (const s of siblings) setParents(s, ...((self.parentIds || []).map(id => byId.get(id))));

  // Children (mine and my spouse's) and their spouses / children
  const kids = [...g("son"), ...g("daughter")];
  for (const k of kids) setParents(k, self, spouse);
  const sons = g("son"), daughters = g("daughter");
  g("dil").forEach((d, i) => marry(d, sons.filter(s => !s.spouseId || s.spouseId === d.id)[i] || sons[i]));
  g("soninlaw").forEach((d, i) => marry(d, daughters.filter(s => !s.spouseId || s.spouseId === d.id)[i] || daughters[i]));
  const gk = [...g("grandson"), ...g("granddaughter")];
  if (gk.length) {
    const parentKid = sons[0] || daughters[0] || placeholder("Add son or daughter", "Son", self.id);
    if (!parentKid.parentIds?.length && parentKid.placeholder) parentKid.parentIds = [self.id];
    const partner = parentKid.spouseId ? byId.get(parentKid.spouseId) : undefined;
    for (const k of gk) setParents(k, parentKid, partner);
  }

  // Dad's side
  const dadSide = [...g("pgf"), ...g("pgm"), ...g("chacha"), ...g("chachi"), ...g("bua"), ...g("fufa")];
  if (dadSide.length) {
    const dad = father || placeholder("Add father", "Father", self.id);
    if (!father) { setParents(self, dad, mother); if (mother) marry(dad, mother); }
    const pgf = first("pgf"), pgm = first("pgm");
    marry(pgf, pgm);
    setParents(dad, pgf, pgm);
    const uncles = [...g("chacha"), ...g("bua")];
    if (uncles.length && !(dad.parentIds && dad.parentIds.length)) parentsOf(dad, "Add Dada", "Dada", self.id);
    for (const u of uncles) setParents(u, ...((dad.parentIds || []).map(id => byId.get(id))));
    g("chachi").forEach((c, i) => marry(c, g("chacha")[i]));
    g("fufa").forEach((c, i) => marry(c, g("bua")[i]));
  }

  // Mum's side
  const mumSide = [...g("mgf"), ...g("mgm"), ...g("mama"), ...g("mami"), ...g("maasi"), ...g("masad")];
  if (mumSide.length) {
    const mum = mother || placeholder("Add mother", "Mother", self.id);
    if (!mother) { setParents(self, father || byId.get((self.parentIds || [])[0] || ""), mum); if (father) marry(father, mum); }
    const mgf = first("mgf"), mgm = first("mgm");
    marry(mgf, mgm);
    setParents(mum, mgf, mgm);
    const sibs = [...g("mama"), ...g("maasi")];
    if (sibs.length && !(mum.parentIds && mum.parentIds.length)) parentsOf(mum, "Add Nana", "Nana", self.id);
    for (const u of sibs) setParents(u, ...((mum.parentIds || []).map(id => byId.get(id))));
    g("mami").forEach((c, i) => marry(c, g("mama")[i]));
    g("masad").forEach((c, i) => marry(c, g("maasi")[i]));
  }

  // Cousins: children of the first uncle/aunt we know
  if (g("cousin").length) {
    const host = first("chacha") || first("bua") || first("mama") || first("maasi");
    if (host) {
      const partner = host.spouseId ? byId.get(host.spouseId) : undefined;
      for (const c of g("cousin")) setParents(c, host, partner);
    }
  }

  // In-laws (my spouse's family)
  const inlaws = [...g("fil"), ...g("mil"), ...g("bil"), ...g("sil")];
  if (inlaws.length) {
    const sp = spouse || placeholder("Add husband or wife", "Wife", self.id);
    if (!spouse) marry(self, sp);
    const fil = first("fil"), mil = first("mil");
    marry(fil, mil);
    setParents(sp, fil, mil);
    const sibs = [...g("bil"), ...g("sil")];
    if (sibs.length && !(sp.parentIds && sp.parentIds.length)) parentsOf(sp, "Add father-in-law", "Father-in-law", self.id);
    for (const s of sibs) setParents(s, ...((sp.parentIds || []).map(id => byId.get(id))));
  }

  // Drop dangling references (deleted people)
  for (const p of people) {
    if (p.parentIds) p.parentIds = p.parentIds.filter(id => byId.has(id));
    if (p.spouseId && !byId.has(p.spouseId)) p.spouseId = undefined;
  }
  return { people, selfId: self.id };
}

/** Simple, friendly relation choices for the "Who are you adding?" screen. */
export const RELATION_TILES: { rel: string; label: string; emoji: string; hint?: string }[] = [
  { rel: "Mother", label: "Mother", emoji: "👩" },
  { rel: "Father", label: "Father", emoji: "👨" },
  { rel: "Wife", label: "Wife", emoji: "💑" },
  { rel: "Husband", label: "Husband", emoji: "💑" },
  { rel: "Brother", label: "Brother", emoji: "👦" },
  { rel: "Sister", label: "Sister", emoji: "👧" },
  { rel: "Son", label: "Son", emoji: "👶" },
  { rel: "Daughter", label: "Daughter", emoji: "👶" },
  { rel: "Dada", label: "Dada", emoji: "👴", hint: "Dad's father" },
  { rel: "Dadi", label: "Dadi", emoji: "👵", hint: "Dad's mother" },
  { rel: "Nana", label: "Nana", emoji: "👴", hint: "Mum's father" },
  { rel: "Nani", label: "Nani", emoji: "👵", hint: "Mum's mother" },
  { rel: "Chacha", label: "Chacha / Tau", emoji: "🧔", hint: "Dad's brother" },
  { rel: "Bua", label: "Bua", emoji: "👩", hint: "Dad's sister" },
  { rel: "Mama", label: "Mama", emoji: "🧔", hint: "Mum's brother" },
  { rel: "Maasi", label: "Maasi", emoji: "👩", hint: "Mum's sister" },
  { rel: "Cousin", label: "Cousin", emoji: "🧑" },
  { rel: "Grandson", label: "Grandson", emoji: "🧒" },
  { rel: "Granddaughter", label: "Granddaughter", emoji: "🧒" },
  { rel: "Father-in-law", label: "Sasur", emoji: "👨", hint: "Father-in-law" },
  { rel: "Mother-in-law", label: "Saas", emoji: "👩", hint: "Mother-in-law" },
  { rel: "Daughter-in-law", label: "Bahu", emoji: "👰", hint: "Daughter-in-law" },
  { rel: "Son-in-law", label: "Damad", emoji: "🤵", hint: "Son-in-law" },
  { rel: "Other", label: "Someone else", emoji: "➕" },
];
