// Supabase rows are snake_case; the app's FamilyMember type is camelCase.
// Without mapping, photos and tree links (parentIds/spouseId) vanished after a
// cloud pull — and the next edit then wiped parent_ids in the database.
export function normalizeCloudMember(m: Record<string, unknown>, i = 0): Record<string, unknown> {
  const name = (m.name as string) || "";
  return {
    ...m,
    photoUrl: m.photoUrl ?? m.photo_url ?? undefined,
    parentIds: m.parentIds ?? (Array.isArray(m.parent_ids) && (m.parent_ids as unknown[]).length ? m.parent_ids : undefined),
    spouseId: m.spouseId ?? m.spouse_id ?? undefined,
    joinedAt: m.joinedAt ?? m.joined_at ?? undefined,
    userId: m.userId ?? m.user_id ?? undefined,
    color: m.color || (i % 2 === 0 ? "saffron" : "forest"),
    initials: m.initials || name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) || "?",
  };
}
