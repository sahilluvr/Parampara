import { buildTreeLayout } from "../src/lib/treeLayout";
import type { FamilyMember } from "../src/lib/store";

function fm(partial: Partial<FamilyMember> & { id: string; name: string }): FamilyMember {
  return {
    role: "Contributor", relation: "Family Member", religion: "Hindu", region: "North India",
    initials: partial.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2),
    color: "saffron", joinedAt: new Date().toISOString(),
    ...partial,
  };
}

const members: FamilyMember[] = [
  // Gen 0 — roots
  fm({ id:"vilayati", name:"Vilayati Ram Aggarwal", spouseId:"devki", parentIds:[] }),
  fm({ id:"devki", name:"Devki Devi Jain", spouseId:"vilayati", parentIds:[] }),

  // Gen 1 — 5 children of root couple, each married in
  fm({ id:"padam", name:"Padam Kumar Jain", parentIds:["vilayati","devki"], spouseId:"nandrani" }),
  fm({ id:"nandrani", name:"Nand Rani Jain", parentIds:[], spouseId:"padam" }),

  fm({ id:"ramesh4", name:"Ramesh Kumar Jain", parentIds:["vilayati","devki"], spouseId:"usha" }),
  fm({ id:"usha", name:"Usha Jain", parentIds:[], spouseId:"ramesh4" }),

  // Gen 2 — children of Padam & Nand Rani
  fm({ id:"sudhir", name:"Sudhir Kumar Jain", parentIds:["padam","nandrani"], spouseId:"madhu" }),
  fm({ id:"madhu", name:"Madhu Jain", parentIds:[], spouseId:"sudhir" }),

  // Gen 2 — child of Ramesh & Usha
  fm({ id:"vikas", name:"Vikas Jain", parentIds:["ramesh4","usha"], spouseId:"renu" }),
  fm({ id:"renu", name:"Renu Jain", parentIds:[], spouseId:"vikas" }),

  // Gen 3 — grandchild via Sudhir & Madhu, married out
  fm({ id:"ritu", name:"Ritu Bansal", parentIds:["sudhir","madhu"], spouseId:"amit" }),
  fm({ id:"amit", name:"Amit Bansal", parentIds:[], spouseId:"ritu" }),

  // Gen 3 — children of Vikas & Renu (no spouse yet — young)
  fm({ id:"manya", name:"Manya", parentIds:["vikas","renu"] }),
  fm({ id:"varun", name:"Varun", parentIds:["vikas","renu"] }),

  // Gen 4 — great-grandchildren via Ritu & Amit
  fm({ id:"viren", name:"Viren", parentIds:["ritu","amit"] }),
  fm({ id:"vishesh", name:"Vishesh", parentIds:["ritu","amit"] }),

  // Edge case: someone with NO links at all — should not appear in any generation row
  fm({ id:"loner", name:"Unlinked Person", parentIds:[] }),
];

const layout = buildTreeLayout(members);

console.log("=== GENERATIONS ===");
layout.generations.forEach((row, i) => {
  console.log(`Gen ${i}:`, row.map(n => n.spouse ? `${n.member.name} & ${n.spouse.name}` : n.member.name).join(" | "));
});

console.log("\n=== EXPECTED ===");
console.log("Gen 0: Vilayati Ram Aggarwal & Devki Devi Jain");
console.log("Gen 1: Padam Kumar Jain & Nand Rani Jain | Ramesh Kumar Jain & Usha Jain");
console.log("Gen 2: Sudhir Kumar Jain & Madhu Jain | Vikas Jain & Renu Jain");
console.log("Gen 3: Ritu Bansal & Amit Bansal | Manya | Varun");
console.log("Gen 4: Viren | Vishesh");
console.log("(Unlinked Person should NOT appear in any generation — orphan, generation 0 alone with no edges, expected to surface via the 'unlinked' count in the UI, not silently merged into a real lineage row)");

// Validate specific assertions
const errors: string[] = [];

if (layout.generations.length !== 5) errors.push(`Expected 5 generations, got ${layout.generations.length}`);

// Compare by the SET of people present in each generation (couple head +
// spouse together), not by which one Im particular got picked as "head" —
// pickCoupleHead's tie-breaking is an implementation detail, not a contract.
function peopleInRow(row: typeof layout.generations[number]): string[] {
  const names: string[] = [];
  row.forEach(n => { names.push(n.member.name); if (n.spouse) names.push(n.spouse.name); });
  return names.sort();
}

const gen0People = peopleInRow(layout.generations[0] || []);
if (JSON.stringify(gen0People) !== JSON.stringify(["Devki Devi Jain", "Vilayati Ram Aggarwal"])) {
  errors.push(`Gen 0 mismatch: ${JSON.stringify(gen0People)}`);
}

const gen1People = peopleInRow(layout.generations[1] || []);
if (JSON.stringify(gen1People) !== JSON.stringify(["Nand Rani Jain", "Padam Kumar Jain", "Ramesh Kumar Jain", "Usha Jain"])) {
  errors.push(`Gen 1 mismatch: ${JSON.stringify(gen1People)}`);
}

const gen4Names = layout.generations[4]?.map(n => n.member.name).sort();
if (JSON.stringify(gen4Names) !== JSON.stringify(["Viren", "Vishesh"])) {
  errors.push(`Gen 4 mismatch: ${JSON.stringify(gen4Names)}`);
}

// Loner should not appear anywhere
const allShownIds = new Set<string>();
layout.generations.flat().forEach(n => { allShownIds.add(n.member.id); if (n.spouse) allShownIds.add(n.spouse.id); });
if (allShownIds.has("loner")) errors.push("Unlinked person incorrectly appeared in tree");

console.log("\n=== RESULT ===");
if (errors.length === 0) {
  console.log("✅ ALL ASSERTIONS PASSED");
} else {
  console.log("❌ FAILURES:");
  errors.forEach(e => console.log(" - " + e));
  process.exit(1);
}
