// ── Vansh Vriksha tree layout engine ─────────────────────────────
// Turns the flat FamilyMember[] list (with parentIds/spouseId edges)
// into a generation-grouped, couple-paired structure ready to render
// as a real branching tree — the same shape as a hand-drawn family
// tree poster, not a flat list dressed up with icons.
//
// This is deliberately separated from the rendering component so the
// graph logic can be tested/reasoned about on its own.

import type { FamilyMember } from "@/lib/store";

export type TreeNode = {
  member: FamilyMember;
  spouse?: FamilyMember;       // the member's spouse, if linked and present in this family
  childrenNodeIds: string[];   // ids of TreeNodes one generation below, fathered/mothered by this couple
  generation: number;          // 0 = oldest known generation in this family's data
};

export type TreeLayout = {
  nodesById: Record<string, TreeNode>;
  generations: TreeNode[][];   // generations[0] = oldest generation, each entry a couple/single unit
  orphans: FamilyMember[];     // members with no parent link AND not used as anyone's spouse-only entry — shown separately so nothing in the family is silently dropped
  rootCount: number;           // how many people have no recorded parents (tree "trunks")
};

function byId(members: FamilyMember[]): Record<string, FamilyMember> {
  const map: Record<string, FamilyMember> = {};
  for (const m of members) map[m.id] = m;
  return map;
}

// A member is a "unit head" if they are NOT solely referenced as someone
// else's spouse without being a parent themselves — i.e. every person gets
// exactly one TreeNode, and spouses are attached to their partner's node
// rather than getting a duplicate node of their own. We pick the spouse
// with children (if any) as the "head" so the couple's children list lives
// in one place; if neither/both have children, the one with a lower id
// sort is picked deterministically so re-renders don't flip the pairing.
function pickCoupleHead(a: FamilyMember, b: FamilyMember, childrenOf: (id: string) => string[]): [FamilyMember, FamilyMember] {
  const aKids = childrenOf(a.id).length;
  const bKids = childrenOf(b.id).length;
  if (aKids !== bKids) return aKids > bKids ? [a, b] : [b, a];
  return a.id < b.id ? [a, b] : [b, a];
}

export function buildTreeLayout(members: FamilyMember[]): TreeLayout {
  const all = byId(members);
  const validIds = new Set(members.map(m => m.id));

  // children lookup: parentId -> array of member ids who have that parent
  const childrenOf = (parentId: string): string[] =>
    members.filter(m => (m.parentIds || []).some(pid => pid === parentId)).map(m => m.id);

  // Track who has already been folded into another node as a spouse, so we
  // don't create a duplicate standalone node for them.
  const consumedAsSpouse = new Set<string>();

  const nodesById: Record<string, TreeNode> = {};

  for (const m of members) {
    if (consumedAsSpouse.has(m.id)) continue;
    if (nodesById[m.id]) continue;

    const spouseId = m.spouseId && validIds.has(m.spouseId) ? m.spouseId : undefined;
    const spouse = spouseId ? all[spouseId] : undefined;
    const hasParents = (m.parentIds || []).length > 0;
    const hasChildren = childrenOf(m.id).length > 0;

    // A person with no parent link, no spouse link, and no children isn't
    // part of any traceable lineage yet — including them would render them
    // as a false "root" ancestor sitting in generation 0 next to people who
    // genuinely are the oldest known generation. They're surfaced instead
    // via the unlinkedCount nudge in the page UI, prompting the person to
    // actually link them in rather than guessing at a placement.
    if (!spouse && !hasParents && !hasChildren) continue;

    let head = m;
    let partner = spouse;

    if (spouse) {
      const [h, p] = pickCoupleHead(m, spouse, childrenOf);
      head = h;
      partner = p;
      consumedAsSpouse.add(partner.id);
      consumedAsSpouse.add(head.id);
    }

    // Children belong to the couple if either partner is listed as a parent
    const kids = new Set<string>();
    childrenOf(head.id).forEach(id => kids.add(id));
    if (partner) childrenOf(partner.id).forEach(id => kids.add(id));

    nodesById[head.id] = {
      member: head,
      spouse: partner,
      childrenNodeIds: [...kids],
      generation: -1, // computed in the next pass
    };
  }

  // ── Compute generation depth ────────────────────────────────────
  // A node's generation = 1 + max(generation of any parent's node), or 0 if
  // they have no recorded parents at all. We resolve a member's *node*
  // (which might be their spouse's node, if they were folded in) before
  // looking up generation, then BFS/topologically sort to avoid recursion
  // issues on deep trees, with a visited guard against accidental cycles
  // in bad data (e.g. someone mistakenly set as their own ancestor).
  function nodeIdFor(memberId: string): string | null {
    if (nodesById[memberId]) return memberId;
    // memberId might be a spouse who was folded into their partner's node
    for (const nid of Object.keys(nodesById)) {
      if (nodesById[nid].spouse?.id === memberId) return nid;
    }
    return null;
  }

  const allNodeIds = Object.keys(nodesById);
  const generationCache: Record<string, number> = {};
  const computing = new Set<string>(); // cycle guard

  function computeGeneration(nodeId: string): number {
    if (generationCache[nodeId] !== undefined) return generationCache[nodeId];
    if (computing.has(nodeId)) return 0; // cycle in bad data — stop recursing, treat as root
    computing.add(nodeId);

    const node = nodesById[nodeId];
    const parentMemberIds = new Set<string>();
    (node.member.parentIds || []).forEach(pid => parentMemberIds.add(pid));
    (node.spouse?.parentIds || []).forEach(pid => parentMemberIds.add(pid));

    let maxParentGen = -1;
    for (const pid of parentMemberIds) {
      const parentNodeId = nodeIdFor(pid);
      if (!parentNodeId || parentNodeId === nodeId) continue; // unknown/self-referencing parent — ignore
      const g = computeGeneration(parentNodeId);
      if (g > maxParentGen) maxParentGen = g;
    }

    const result = maxParentGen + 1;
    generationCache[nodeId] = result;
    computing.delete(nodeId);
    return result;
  }

  for (const nid of allNodeIds) {
    nodesById[nid].generation = computeGeneration(nid);
  }

  // ── Group into rows ──────────────────────────────────────────────
  const maxGen = allNodeIds.length ? Math.max(...allNodeIds.map(id => nodesById[id].generation)) : -1;
  const generations: TreeNode[][] = [];
  for (let g = 0; g <= maxGen; g++) generations.push([]);
  for (const nid of allNodeIds) {
    const node = nodesById[nid];
    if (generations[node.generation]) generations[node.generation].push(node);
  }

  // Sort each generation row so that couples with children appear before
  // childless entries, then alphabetically — keeps siblings' families
  // visually grouped together rather than randomly interleaved.
  for (const row of generations) {
    row.sort((a, b) => {
      if (a.childrenNodeIds.length !== b.childrenNodeIds.length) return b.childrenNodeIds.length - a.childrenNodeIds.length;
      return a.member.name.localeCompare(b.member.name);
    });
  }

  const rootCount = generations[0]?.length || 0;

  return { nodesById, generations, orphans: [], rootCount };
}
