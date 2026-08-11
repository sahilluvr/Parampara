export const C = {
  saffron: "#C8541A", saffronLight: "#FDF0E6", saffronMid: "#E8894A",
  gold: "#B8922A", goldLight: "#F9F3E3", goldBright: "#D4A843",
  forest: "#1A5C42", forestLight: "#E8F4EE",
  ivory: "#FAF7F2", cream: "#F5F0E8",
  charcoal: "#18181B", dark: "#0C0C0E",
  gray: "#71717A", grayLight: "#F4F4F5",
  border: "rgba(184,146,42,0.15)", white: "#FFFFFF",
};

export const F = {
  serif: "'Playfair Display', Georgia, serif",
  display: "'Cormorant Garamond', Georgia, serif",
  sans: "'Inter', system-ui, sans-serif",
};

// Images — permanently hosted on Cloudinary (never breaks, never needs re-uploading)
export const IMGS = {
  hero:     "https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/hero_aohp6w.jpg",
  havan:    "https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/havan_kq6y9j.jpg",
  diya:     "https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/diya_errxmu.jpg",
  rangoli:  "https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/rangoli_oz2jbo.jpg",
  flowers:  "https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/flowers_mtedvz.jpg",
  temple:   "https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/Temple_qotm2u.jpg",
  festival: "https://res.cloudinary.com/dol1etd26/image/upload/v1780595951/festival_jf8las.jpg",
  incense:  "https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/incense_smz7eq.jpg",
  wedding:  "https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/wedding_mdlrhu.jpg",
  family:   "https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/family_tyaexf.jpg",
  granth:   "https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/granth_o365iz.jpg",
  about:    "https://res.cloudinary.com/dol1etd26/image/upload/v1780595951/about_la3h0l.jpg",
};

export const GALLERY_CARDS = [
  { key:"havan",    label:"Havan & Yagya",       sublabel:"Sacred fire ritual",   img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/havan_kq6y9j.jpg",   grad:"linear-gradient(160deg,#3D0C00,#C8541A)" },
  { key:"diya",     label:"Diya & Aarti",         sublabel:"Sacred lamp offering", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/diya_errxmu.jpg",    grad:"linear-gradient(160deg,#3D2000,#D97706)" },
  { key:"temple",   label:"Temple Traditions",    sublabel:"Devotional worship",   img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/Temple_qotm2u.jpg",  grad:"linear-gradient(160deg,#0A1628,#2563EB)" },
  { key:"flowers",  label:"Puja Offerings",       sublabel:"Sacred offerings",     img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/flowers_mtedvz.jpg", grad:"linear-gradient(160deg,#3D0A1E,#BE185D)" },
  { key:"rangoli",  label:"Rangoli & Festivals",  sublabel:"Festival art",         img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/rangoli_oz2jbo.jpg", grad:"linear-gradient(160deg,#0A2E0A,#16A34A)" },
];

export const WHATWEDO_CARDS = [
  { emoji:"📜", grad:"linear-gradient(135deg,#7B1D00,#C8541A)", label:"Ritual Documentation", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/diya_errxmu.jpg"     },
  { emoji:"🌸", grad:"linear-gradient(135deg,#14532D,#16A34A)", label:"Sacred Offerings",     img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/flowers_mtedvz.jpg"  },
  { emoji:"🪔", grad:"linear-gradient(135deg,#7A4100,#D97706)", label:"Festival Calendar",    img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595951/festival_jf8las.jpg" },
  { emoji:"✨", grad:"linear-gradient(135deg,#1E1B4B,#7C3AED)", label:"AI Assistant",         img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/incense_smz7eq.jpg"  },
  { emoji:"📸", grad:"linear-gradient(135deg,#1A3A5C,#0284C7)", label:"Memory Vault",         img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/family_tyaexf.jpg"   },
  { emoji:"🛕", grad:"linear-gradient(135deg,#1A3A1A,#1A5C42)", label:"Family Space",         img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/Temple_qotm2u.jpg"   },
];

export const RITUAL_CARDS = [
  { name:"Namkaran",          grad:"linear-gradient(135deg,#7B3A00,#C8541A)", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/flowers_mtedvz.jpg",  emoji:"👶" },
  { name:"Annaprashan",       grad:"linear-gradient(135deg,#1A3A1A,#16A34A)", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/diya_errxmu.jpg",     emoji:"🍚" },
  { name:"Mundan",            grad:"linear-gradient(135deg,#7A2E00,#EA580C)", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/havan_kq6y9j.jpg",    emoji:"✂️" },
  { name:"Yagnopavitam",      grad:"linear-gradient(135deg,#1A2A5C,#2563EB)", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/Temple_qotm2u.jpg",   emoji:"🧵" },
  { name:"Vivah",             grad:"linear-gradient(135deg,#4A1A6A,#9333EA)", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/wedding_mdlrhu.jpg",  emoji:"💒" },
  { name:"Griha Pravesh",     grad:"linear-gradient(135deg,#1A3A1A,#1A5C42)", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595951/festival_jf8las.jpg", emoji:"🏠" },
  { name:"Satyanarayan Katha",grad:"linear-gradient(135deg,#7A5500,#B8922A)", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595952/incense_smz7eq.jpg",  emoji:"🙏" },
  { name:"Shraddha",          grad:"linear-gradient(135deg,#2A2A3A,#475569)", img:"https://res.cloudinary.com/dol1etd26/image/upload/v1780595953/diya_errxmu.jpg",     emoji:"🕊️" },
];
