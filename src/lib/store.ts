export type Ritual = {
  id: string; name: string; subtitle: string; category: string;
  religion: string[]; region: string; language: string;
  performedCount: number; steps: string[];
  samagri: { item: string; quantity: string; purpose: string }[];
  mantras: { devanagari: string; transliteration: string; meaning: string }[];
  elderNotes: string; preparationDays: number;
  isTemplate: boolean; createdAt: string;
};

export type FamilyMember = {
  id: string; name: string; role: string; relation: string;
  religion: string; region: string; initials: string; color: string;
  email?: string; joinedAt: string;
  birthdate?: string;    // YYYY-MM-DD — for birthday reminders
  anniversary?: string;  // YYYY-MM-DD — for anniversary reminders
  photoUrl?: string;
  addedBy?: string;      // user ID or email of who added this member
  // ── Vansh Vriksha (family tree) relationship graph ──────────
  // These are the actual edges that let us draw a real multi-generation
  // tree (branches, couples joined, correct parent/child placement) —
  // `relation` alone (e.g. "Father", "Cousin") is only ever relative to
  // "Self" and can't reconstruct who is whose child. parentIds/spouseId
  // reference other FamilyMember.id values within the same family.
  parentIds?: string[];  // 0, 1, or 2 member IDs — this person's parent(s)
  spouseId?: string;     // member ID — this person's spouse, if recorded
  deceased?: boolean;    // shown with a subtle marker in the tree, like the reference poster convention
};

export type Festival = {
  id: string; name: string; date: string; religion: string;
  significance: string; ritualSteps: string[]; food: string;
  samagri: string[]; isCustom: boolean;
};

export type MediaItem = {
  id: string; type: "photo"|"video"|"audio";
  emoji: string; label: string; ritual: string;
  date: string; reactions: number;
};

export const SAMPLE_RITUAL: Ritual = {
  id: "namkaran-sample",
  name: "Namkaran", subtitle: "Naming Ceremony — Sample Template",
  category: "Naming", religion: ["Hindu"], region: "North India",
  language: "Hindi/Sanskrit", performedCount: 0,
  steps: [
    "Purify the space with Ganga jal and light the diya",
    "Seat the baby on the mother's lap facing East",
    "Priest performs Ganapati puja to remove obstacles",
    "Nakshatra confirmed with horoscope",
    "Father whispers the name into baby's right ear",
    "Name announced to family with a conch blow",
    "Priest recites naming mantras and blessings",
    "Family feast — kheer and puri are served",
  ],
  samagri: [
    { item:"Ghee", quantity:"500g", purpose:"For havan" },
    { item:"Raw rice (akshat)", quantity:"2 kg", purpose:"Offerings" },
    { item:"Turmeric powder", quantity:"100g", purpose:"Purification" },
    { item:"Flowers — marigold", quantity:"2 kg", purpose:"Decoration" },
    { item:"Incense sticks", quantity:"2 packets", purpose:"Purification" },
    { item:"Silver coin", quantity:"1 no", purpose:"First gift to baby" },
  ],
  mantras: [{ devanagari:"ॐ नमः शिवाय। आयुष्मान् भव।", transliteration:"Om Namah Shivaya. Aayushmaan bhava.", meaning:"I bow to Shiva. May you be blessed with long life." }],
  elderNotes: "This is a sample template. Edit it to match your family's tradition.",
  preparationDays: 7, isTemplate: true, createdAt: new Date().toISOString(),
};

export const PRESET_FESTIVALS: Festival[] = [
  { id:"guru-purnima", name:"Guru Purnima", date:"2026-07-29", religion:"Hindu", isCustom:false, significance:"A sacred day to honor spiritual and academic teachers.", ritualSteps:["Wake early, take a purifying bath","Visit your guru","Offer flowers, fruits, and dakshina","Fast or eat sattvic food","Evening puja and aarti"], food:"Sattvic food — fruits, milk, kheer.", samagri:["Flowers","Fruits","Dakshina","Agarbatti","Diya"] },
  { id:"raksha-bandhan", name:"Raksha Bandhan", date:"2026-08-28", religion:"Hindu", isCustom:false, significance:"Sisters tie a sacred thread on their brother's wrist, symbolizing love and protection.", ritualSteps:["Sister performs aarti","Applies tilak","Ties rakhi on right wrist","Brother gives gift","Sweets exchanged"], food:"Sweets — ladoo, barfi, kheer.", samagri:["Rakhi thread","Roli/kumkum","Akshat","Diya","Sweets"] },
  { id:"janmashtami", name:"Janmashtami", date:"2026-09-04", religion:"Hindu", isCustom:false, significance:"Birth of Lord Krishna at midnight.", ritualSteps:["Fast from sunrise","Decorate jhula for Krishna","Sing bhajans all day","At midnight: bathe Krishna idol","Break fast with panchamrit"], food:"Panchamrit, fruits, makhana after midnight.", samagri:["Krishna idol","Jhula","Panchamrit ingredients","Flowers","Conch"] },
  { id:"navratri", name:"Navratri", date:"2026-10-11", religion:"Hindu", isCustom:false, significance:"Nine nights of worship of Goddess Durga.", ritualSteps:["Set up Devi altar","Plant jau in a pot","Aarti twice daily for 9 days","Eat vrat foods","Garba/dandiya evenings"], food:"Sabudana khichdi, kuttu poori, fruits.", samagri:["Durga murti","Red chunri","Coconut","Red flowers","Ghee diya"] },
  { id:"diwali", name:"Diwali", date:"2026-11-08", religion:"Hindu", isCustom:false, significance:"Festival of lights with diyas, Lakshmi puja, sweets, and family gatherings.", ritualSteps:["Clean and decorate home","Make rangoli","Light diyas at dusk","Lakshmi-Ganesha puja","Exchange sweets and gifts"], food:"Mithai: kaju katli, ladoo, gulab jamun.", samagri:["Clay diyas","Mustard oil","Cotton wicks","Lakshmi-Ganesha idol","Rangoli colors"] },
];
