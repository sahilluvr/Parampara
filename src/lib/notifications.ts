// ── Notification System ─────────────────────────────────────
// localStorage-based, persists across sessions, deduped by key

export type Notification = {
  id: string;
  key: string;       // dedup key
  type: "member_added"|"invite_joined"|"ritual_added"|"system";
  title: string;
  body: string;
  familyId: string;
  read: boolean;
  createdAt: string;
};

const STORAGE_KEY = "parampara_notifications";

export function getNotifications(): Notification[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch { return []; }
}

function saveNotifications(notifs: Notification[]) {
  // Keep max 50
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notifs.slice(0, 50)));
}

export function addNotification(n: Omit<Notification, "id"|"read"|"createdAt">) {
  const all = getNotifications();
  // Deduplicate by key
  if (all.some(x => x.key === n.key)) return;
  const notif: Notification = { ...n, id: `notif-${Date.now()}`, read: false, createdAt: new Date().toISOString() };
  saveNotifications([notif, ...all]);
  // Dispatch so bell updates immediately
  window.dispatchEvent(new CustomEvent("parampara_notification", { detail: notif }));
}

export function markAllRead() {
  const all = getNotifications().map(n => ({ ...n, read: true }));
  saveNotifications(all);
  window.dispatchEvent(new CustomEvent("parampara_notification"));
}

export function markRead(id: string) {
  const all = getNotifications().map(n => n.id === id ? { ...n, read: true } : n);
  saveNotifications(all);
  window.dispatchEvent(new CustomEvent("parampara_notification"));
}

export function getUnreadCount(): number {
  return getNotifications().filter(n => !n.read).length;
}

// ── Trigger helpers ────────────────────────────────────────
export function notifyMemberAdded(memberName: string, addedBy: string, familyId: string, familyName: string) {
  addNotification({
    key: `member-added-${memberName}-${familyId}`,
    type: "member_added",
    title: `${memberName} added to ${familyName}`,
    body: `${addedBy} added ${memberName} to your family.`,
    familyId,
  });
}

export function notifyInviteJoined(memberName: string, familyId: string, familyName: string) {
  addNotification({
    key: `invite-joined-${memberName}-${familyId}`,
    type: "invite_joined",
    title: `${memberName} joined ${familyName}! 🎉`,
    body: `${memberName} accepted your family invite and joined the space.`,
    familyId,
  });
}

export function notifyRitualAdded(ritualName: string, addedBy: string, familyId: string, familyName: string) {
  addNotification({
    key: `ritual-${ritualName}-${familyId}`,
    type: "ritual_added",
    title: `New ritual: ${ritualName}`,
    body: `${addedBy} added "${ritualName}" to ${familyName}.`,
    familyId,
  });
}
