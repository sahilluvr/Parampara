// Single source of truth for what each plan includes.
// Keep this in line with what the app actually gates (ai, heritage-book,
// mannats pages and the 2-space limit in lib/families.ts) — the old pricing
// table promised limits and Pro features that didn't exist, which hurts trust
// exactly at the moment someone is deciding whether to pay.

export type PlanRow = { label: string; free: boolean | string; pro: boolean | string; hint?: string };

export const COMPARISON: PlanRow[] = [
  { label: "Family members & invites",        free: "Unlimited",  pro: "Unlimited" },
  { label: "Rituals & traditions",            free: "Unlimited",  pro: "Unlimited" },
  { label: "Family tree",       free: true,         pro: true },
  { label: "Festival calendar & birthdays",   free: true,         pro: true },
  { label: "Memory vault & voice archive",    free: true,         pro: true },
  { label: "Family spaces",                   free: "2",          pro: "Unlimited", hint: "Separate spaces for your side and your spouse's side, in-laws, extended family" },
  { label: "Heritage Book (print-ready PDF)", free: false,        pro: true, hint: "Every ritual, member and memory laid out as a keepsake book" },
  { label: "AI ritual assistant",             free: false,        pro: true, hint: "Explains rituals, builds samagri lists with quantities, finds missing steps" },
  { label: "Mannats (family vows) tracker",   free: false,        pro: true },
  { label: "Priority support",                free: false,        pro: true },
];

export const PRO_OUTCOMES = [
  {
    title: "A Heritage Book with your family's name on it",
    body: "Every ritual, every member and every story you've saved, laid out as a print-ready book. Give it to your parents, print a copy for the pooja room, send one to cousins abroad.",
  },
  {
    title: "An assistant that knows the rituals",
    body: "Ask how a Satyanarayan katha is done, get a samagri list with quantities for Griha Pravesh, or check which steps are missing from what Dadi told you.",
  },
  {
    title: "Mannats, so no vow is forgotten",
    body: "Record who made a vow, to whom, and what has to happen when it's fulfilled — with the date, so the family remembers.",
  },
];

export const FREE_SUMMARY = [
  "Unlimited members, rituals and memories",
  "Family tree, festival calendar, birthdays",
  "Invite the whole family",
  "2 family spaces",
];

export const PRO_SUMMARY = [
  "Everything in Free",
  "Heritage Book — print-ready PDF",
  "AI ritual assistant",
  "Mannats tracker",
  "Unlimited family spaces",
  "Priority support",
];
