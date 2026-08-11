// ── Baby Name Finder data ──
// Names organized by Rashi (moon sign) and starting-syllable groups,
// per traditional Vedic naming conventions referenced in our Nakshatra blog post.

export type BabyName = { name: string; meaning: string; gender: "boy" | "girl" | "unisex" };

export type RashiInfo = {
  id: string;
  name: string;
  sanskrit: string;
  syllables: string;
  element: string;
  emoji: string;
  names: BabyName[];
};

export const RASHI_LIST: RashiInfo[] = [
  {
    id: "mesha", name: "Mesha (Aries)", sanskrit: "मेष", syllables: "Chu, Che, Cho, La, Li, Lu, Le, Lo, A",
    element: "Fire", emoji: "♈",
    names: [
      { name: "Chetan", meaning: "Conscious, intelligent", gender: "boy" },
      { name: "Lavanya", meaning: "Grace, beauty", gender: "girl" },
      { name: "Lakshay", meaning: "Aim, goal", gender: "boy" },
      { name: "Charvi", meaning: "Beautiful, attractive", gender: "girl" },
      { name: "Lohit", meaning: "Red, radiant", gender: "boy" },
      { name: "Leela", meaning: "Divine play", gender: "girl" },
    ],
  },
  {
    id: "vrishabha", name: "Vrishabha (Taurus)", sanskrit: "वृषभ", syllables: "E, U, O, Va, Vi, Vu, Ve, Vo",
    element: "Earth", emoji: "♉",
    names: [
      { name: "Vivaan", meaning: "Full of life", gender: "boy" },
      { name: "Esha", meaning: "Desire, wish", gender: "girl" },
      { name: "Veer", meaning: "Brave, warrior", gender: "boy" },
      { name: "Vidya", meaning: "Knowledge", gender: "girl" },
      { name: "Om", meaning: "Sacred sound, universe", gender: "boy" },
      { name: "Vani", meaning: "Voice, speech (Saraswati)", gender: "girl" },
    ],
  },
  {
    id: "mithuna", name: "Mithuna (Gemini)", sanskrit: "मिथुन", syllables: "Ka, Ki, Ku, Gha, Chha, Ke, Ko, Ha",
    element: "Air", emoji: "♊",
    names: [
      { name: "Karan", meaning: "Cause, instrument", gender: "boy" },
      { name: "Kiara", meaning: "Bright, famous", gender: "girl" },
      { name: "Kabir", meaning: "Great, noble", gender: "boy" },
      { name: "Kavya", meaning: "Poetry", gender: "girl" },
      { name: "Harsh", meaning: "Joy, happiness", gender: "boy" },
      { name: "Hansika", meaning: "Swan-like, graceful", gender: "girl" },
    ],
  },
  {
    id: "karka", name: "Karka (Cancer)", sanskrit: "कर्क", syllables: "Hi, Hu, He, Ho, Da, Di, Du, De, Do",
    element: "Water", emoji: "♋",
    names: [
      { name: "Heer", meaning: "Diamond", gender: "girl" },
      { name: "Hemant", meaning: "Winter, golden", gender: "boy" },
      { name: "Diya", meaning: "Lamp, light", gender: "girl" },
      { name: "Dev", meaning: "God, divine", gender: "boy" },
      { name: "Hridaan", meaning: "One who gives heart", gender: "boy" },
      { name: "Disha", meaning: "Direction", gender: "girl" },
    ],
  },
  {
    id: "simha", name: "Simha (Leo)", sanskrit: "सिंह", syllables: "Ma, Mi, Mu, Me, Mo, Ta, Ti, Tu, Te, To",
    element: "Fire", emoji: "♌",
    names: [
      { name: "Maya", meaning: "Illusion, magic", gender: "girl" },
      { name: "Tanvi", meaning: "Delicate, beautiful", gender: "girl" },
      { name: "Manav", meaning: "Human, mankind", gender: "boy" },
      { name: "Tanish", meaning: "Ambition, desire", gender: "boy" },
      { name: "Mira", meaning: "Devotee of Krishna", gender: "girl" },
      { name: "Tejas", meaning: "Brilliance, glow", gender: "boy" },
    ],
  },
  {
    id: "kanya", name: "Kanya (Virgo)", sanskrit: "कन्या", syllables: "Pa, Tha, Pe, Po, Ra, Ri, Ru, Re, Ro",
    element: "Earth", emoji: "♍",
    names: [
      { name: "Priya", meaning: "Beloved", gender: "girl" },
      { name: "Reyansh", meaning: "Part of Lord Vishnu", gender: "boy" },
      { name: "Riya", meaning: "Singer, graceful", gender: "girl" },
      { name: "Pranav", meaning: "Sacred sound Om", gender: "boy" },
      { name: "Rohini", meaning: "Star, ascending", gender: "girl" },
      { name: "Parth", meaning: "Another name for Arjuna", gender: "boy" },
    ],
  },
  {
    id: "tula", name: "Tula (Libra)", sanskrit: "तुला", syllables: "Ra, Ri, Ru, Re, Ro, Ta, Ti, Tu, Te",
    element: "Air", emoji: "♎",
    names: [
      { name: "Riya", meaning: "Singer, graceful", gender: "girl" },
      { name: "Tarun", meaning: "Young, youthful", gender: "boy" },
      { name: "Tara", meaning: "Star", gender: "girl" },
      { name: "Rudra", meaning: "A form of Shiva", gender: "boy" },
      { name: "Tisha", meaning: "Auspicious, joyful", gender: "girl" },
      { name: "Ritvik", meaning: "One who performs rituals", gender: "boy" },
    ],
  },
  {
    id: "vrishchika", name: "Vrishchika (Scorpio)", sanskrit: "वृश्चिक", syllables: "To, Na, Ni, Nu, Ne, No, Ya, Yi, Yu",
    element: "Water", emoji: "♏",
    names: [
      { name: "Naina", meaning: "Eyes, beautiful eyes", gender: "girl" },
      { name: "Yash", meaning: "Fame, glory", gender: "boy" },
      { name: "Nitya", meaning: "Eternal, constant", gender: "girl" },
      { name: "Yuvraj", meaning: "Prince", gender: "boy" },
      { name: "Naman", meaning: "Salutation, respect", gender: "boy" },
      { name: "Nisha", meaning: "Night", gender: "girl" },
    ],
  },
  {
    id: "dhanu", name: "Dhanu (Sagittarius)", sanskrit: "धनु", syllables: "Ye, Yo, Bha, Bhi, Bhu, Dha, Pha, Dha",
    element: "Fire", emoji: "♐",
    names: [
      { name: "Bhavya", meaning: "Grand, magnificent", gender: "girl" },
      { name: "Dhruv", meaning: "Pole star, fixed", gender: "boy" },
      { name: "Bhumi", meaning: "Earth", gender: "girl" },
      { name: "Dhairya", meaning: "Courage, patience", gender: "boy" },
      { name: "Bhavika", meaning: "Devotional, expressive", gender: "girl" },
      { name: "Yug", meaning: "Era, age", gender: "boy" },
    ],
  },
  {
    id: "makara", name: "Makara (Capricorn)", sanskrit: "मकर", syllables: "Bho, Ja, Ji, Khi, Khu, Khe, Kho, Ga, Gi",
    element: "Earth", emoji: "♑",
    names: [
      { name: "Jiya", meaning: "Heart, sweetheart", gender: "girl" },
      { name: "Gauri", meaning: "Fair, Goddess Parvati", gender: "girl" },
      { name: "Jay", meaning: "Victory", gender: "boy" },
      { name: "Ganesh", meaning: "Lord of obstacles", gender: "boy" },
      { name: "Khushi", meaning: "Happiness", gender: "girl" },
      { name: "Girish", meaning: "Lord of mountains (Shiva)", gender: "boy" },
    ],
  },
  {
    id: "kumbha", name: "Kumbha (Aquarius)", sanskrit: "कुंभ", syllables: "Gu, Ge, Go, Sa, Si, Su, Se, So, Da",
    element: "Air", emoji: "♒",
    names: [
      { name: "Sara", meaning: "Essence, precious", gender: "girl" },
      { name: "Sahil", meaning: "Shore, guide", gender: "boy" },
      { name: "Saanvi", meaning: "Goddess Lakshmi", gender: "girl" },
      { name: "Gautam", meaning: "Name of Buddha", gender: "boy" },
      { name: "Suhana", meaning: "Pleasant, beautiful", gender: "girl" },
      { name: "Govind", meaning: "Another name for Krishna", gender: "boy" },
    ],
  },
  {
    id: "meena", name: "Meena (Pisces)", sanskrit: "मीन", syllables: "Di, Du, Tha, Jha, Da, Cha, Thi, Chha",
    element: "Water", emoji: "♓",
    names: [
      { name: "Dia", meaning: "Light, lamp", gender: "girl" },
      { name: "Chahna", meaning: "Desire, longing", gender: "girl" },
      { name: "Divit", meaning: "Immortal", gender: "boy" },
      { name: "Tharun", meaning: "Young", gender: "boy" },
      { name: "Diya", meaning: "Lamp, light", gender: "girl" },
      { name: "Charit", meaning: "Character, story", gender: "boy" },
    ],
  },
];

export function getRashi(id: string): RashiInfo | undefined {
  return RASHI_LIST.find(r => r.id === id);
}
