// ── Data for homepage interactive tools: Festival Countdown & Muhurat Finder ──
// Dates are for 2026 (current cycle). Update annually.

export type ToolFestival = {
  name: string;
  date: string; // YYYY-MM-DD
  emoji: string;
  blogSlug?: string;
};

export const UPCOMING_FESTIVALS: ToolFestival[] = [
  { name: "Guru Purnima", date: "2026-07-29", emoji: "🪔" },
  { name: "Raksha Bandhan", date: "2026-08-28", emoji: "🎀", blogSlug: "raksha-bandhan-rituals-significance" },
  { name: "Teej", date: "2026-08-31", emoji: "🌿" },
  { name: "Janmashtami", date: "2026-09-04", emoji: "🦚", blogSlug: "janmashtami-krishna-birthday-celebration-guide" },
  { name: "Ganesh Chaturthi", date: "2026-09-14", emoji: "🐘", blogSlug: "ganesh-chaturthi-puja-vidhi-samagri" },
  { name: "Pitru Paksha begins", date: "2026-09-21", emoji: "🙏", blogSlug: "pitru-paksha-shradh-rituals-guide" },
  { name: "Navratri begins", date: "2026-10-11", emoji: "✨", blogSlug: "navratri-puja-guide-9-days" },
  { name: "Mahashtami", date: "2026-10-19", emoji: "🪷", blogSlug: "durga-ashtami-mahashtami-puja-guide" },
  { name: "Dussehra", date: "2026-10-20", emoji: "🏹" },
  { name: "Karva Chauth", date: "2026-10-29", emoji: "🌙", blogSlug: "karva-chauth-puja-vidhi-complete-guide" },
  { name: "Diwali", date: "2026-11-08", emoji: "🪔", blogSlug: "diwali-puja-steps-for-family" },
  { name: "Govardhan Puja", date: "2026-11-09", emoji: "⛰️", blogSlug: "govardhan-puja-annakut-vidhi-guide" },
  { name: "Bhai Dooj", date: "2026-11-10", emoji: "🙏", blogSlug: "bhai-dooj-rituals-significance-guide" },
  { name: "Chhath Puja", date: "2026-11-15", emoji: "🌅", blogSlug: "chhath-puja-vidhi-rituals-complete-guide" },
  { name: "Tulsi Vivah", date: "2026-11-21", emoji: "🌱", blogSlug: "tulsi-vivah-ritual-guide" },
  { name: "Guru Nanak Jayanti", date: "2026-11-24", emoji: "🪔" },
  { name: "Vivah Panchami", date: "2026-12-04", emoji: "💍" },
  { name: "Makar Sankranti", date: "2027-01-14", emoji: "🪁", blogSlug: "makar-sankranti-festival-guide-rituals-significance" },
  { name: "Lohri", date: "2027-01-13", emoji: "🔥", blogSlug: "lohri-festival-celebration-guide" },
  { name: "Vasant Panchami", date: "2027-01-23", emoji: "📿", blogSlug: "saraswati-puja-vasant-panchami-guide" },
  { name: "Maha Shivratri", date: "2027-02-15", emoji: "🔱" },
  { name: "Holi", date: "2027-03-22", emoji: "🎨", blogSlug: "holi-festival-guide-rituals-significance" },
  { name: "Hanuman Jayanti", date: "2027-04-01", emoji: "🪷", blogSlug: "hanuman-jayanti-rituals-significance-guide" },
  { name: "Akshaya Tritiya", date: "2027-04-19", emoji: "✨", blogSlug: "akshaya-tritiya-significance-rituals-guide" },
];

export function getNextFestivals(count: number = 5, from: Date = new Date()): ToolFestival[] {
  return UPCOMING_FESTIVALS
    .filter(f => new Date(f.date + "T23:59:59") >= from)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, count);
}

// Precise live countdown — used to drive a real ticking display (days,
// hours, minutes) rather than a static "in X days" string, so the
// countdown card visibly updates while someone is looking at it.
export function getCountdown(dateStr: string, from: Date = new Date()) {
  const target = new Date(dateStr + "T00:00:00");
  const diffMs = Math.max(0, target.getTime() - from.getTime());
  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;
  return { days, hours, minutes, isToday: days === 0 && diffMs >= 0 && diffMs < 86400000 };
}

// ── Muhurat Finder ──
// Auspicious-date categories with simple rule-based date lists for 2026.
// These are general guidance dates, not personalized astrological calculations —
// users with specific needs should consult a family priest/astrologer.

export type MuhuratCategory = {
  id: string;
  label: string;
  emoji: string;
  description: string;
  dates: { date: string; note?: string }[];
  blogSlug?: string;
};

export const MUHURAT_CATEGORIES: MuhuratCategory[] = [
  {
    id: "griha-pravesh",
    label: "Griha Pravesh (Housewarming)",
    emoji: "🏠",
    description: "Auspicious dates for moving into a new home",
    blogSlug: "griha-pravesh-puja-samagri-list",
    dates: [
      { date: "2026-06-26", note: "Generally favourable — verify with family priest" },
      { date: "2026-07-13", note: "Generally favourable — verify with family priest" },
      { date: "2026-07-29", note: "Guru Purnima — widely considered auspicious" },
      { date: "2026-11-08", note: "Diwali — highly auspicious for new beginnings" },
      { date: "2027-04-19", note: "Akshaya Tritiya — traditionally favoured for property" },
    ],
  },
  {
    id: "vehicle-purchase",
    label: "New Vehicle Purchase",
    emoji: "🚗",
    description: "Auspicious dates for buying or registering a new vehicle",
    blogSlug: "vahan-puja-new-car-vidhi-samagri",
    dates: [
      { date: "2026-07-29", note: "Guru Purnima" },
      { date: "2026-10-20", note: "Dussehra — Vijayadashami, excellent for new purchases" },
      { date: "2026-11-08", note: "Diwali — Lakshmi Puja day" },
      { date: "2026-11-09", note: "Govardhan Puja" },
      { date: "2027-04-19", note: "Akshaya Tritiya" },
    ],
  },
  {
    id: "naming-ceremony",
    label: "Namkaran (Naming Ceremony)",
    emoji: "👶",
    description: "General guidance — exact muhurat depends on the baby's birth Nakshatra",
    blogSlug: "namkaran-naming-ceremony-guide",
    dates: [
      { date: "2026-06-25", note: "Thursday — traditionally favourable weekday" },
      { date: "2026-07-02", note: "Thursday — traditionally favourable weekday" },
      { date: "2026-07-29", note: "Guru Purnima" },
      { date: "2027-04-19", note: "Akshaya Tritiya" },
    ],
  },
  {
    id: "engagement",
    label: "Sagai / Engagement",
    emoji: "💍",
    description: "Commonly preferred dates for engagement ceremonies",
    blogSlug: "roka-engagement-ceremony-guide",
    dates: [
      { date: "2026-10-20", note: "Dussehra — Vijayadashami" },
      { date: "2026-11-08", note: "Diwali" },
      { date: "2026-12-04", note: "Vivah Panchami — traditionally linked to Sita-Rama's wedding" },
      { date: "2027-04-19", note: "Akshaya Tritiya" },
    ],
  },
  {
    id: "business-launch",
    label: "Business / New Venture Launch",
    emoji: "📈",
    description: "Auspicious dates to start a new business or sign agreements",
    dates: [
      { date: "2026-07-29", note: "Guru Purnima" },
      { date: "2026-10-20", note: "Dussehra — Vijayadashami" },
      { date: "2026-11-08", note: "Diwali — Lakshmi Puja day" },
      { date: "2027-04-19", note: "Akshaya Tritiya" },
    ],
  },
];

export function getUpcomingMuhurats(categoryId: string, count: number = 3, from: Date = new Date()) {
  const cat = MUHURAT_CATEGORIES.find(c => c.id === categoryId);
  if (!cat) return [];
  return cat.dates
    .filter(d => new Date(d.date + "T23:59:59") >= from)
    .slice(0, count);
}
