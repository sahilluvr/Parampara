export const C = {
  saffron: "#D6246E", saffronLight: "#FCE8F0", saffronMid: "#EE5A92",
  gold: "#7A3FD9", goldLight: "#FFF4DC", goldBright: "#FFB224",
  forest: "#0F7A73", forestLight: "#E3F4F2",
  ivory: "#F8F6FC", cream: "#F1EDF8",
  charcoal: "#1C1733", dark: "#120C2E",
  gray: "#625C7A", grayLight: "#F4F4F5",
  border: "rgba(122,63,217,0.15)", white: "#FFFFFF",
};

export const F = {
  serif: "'Bricolage Grotesque',system-ui,sans-serif",
  display: "'Bricolage Grotesque',system-ui,sans-serif",
  sans: "'Inter', system-ui, sans-serif",
};

// Images — permanently hosted on Cloudinary (never breaks, never needs re-uploading)
export const IMGS = {
  hero:     "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/hero_aohp6w.jpg",
  havan:    "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/havan_kq6y9j.jpg",
  diya:     "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/diya_errxmu.jpg",
  rangoli:  "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/rangoli_oz2jbo.jpg",
  flowers:  "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/flowers_mtedvz.jpg",
  temple:   "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/Temple_qotm2u.jpg",
  festival: "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595951/festival_jf8las.jpg",
  incense:  "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/incense_smz7eq.jpg",
  wedding:  "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/wedding_mdlrhu.jpg",
  family:   "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/family_tyaexf.jpg",
  granth:   "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/granth_o365iz.jpg",
  about:    "https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595951/about_la3h0l.jpg",
};

export const GALLERY_CARDS = [
  { key:"havan",    label:"Havan & Yagya",       sublabel:"Sacred fire ritual",   img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/havan_kq6y9j.jpg",   grad:"linear-gradient(160deg,#3D0C00,#D6246E)" },
  { key:"diya",     label:"Diya & Aarti",         sublabel:"Sacred lamp offering", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/diya_errxmu.jpg",    grad:"linear-gradient(160deg,#3D2000,#D97706)" },
  { key:"temple",   label:"Temple Traditions",    sublabel:"Devotional worship",   img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/Temple_qotm2u.jpg",  grad:"linear-gradient(160deg,#0A1628,#2563EB)" },
  { key:"flowers",  label:"Puja Offerings",       sublabel:"Sacred offerings",     img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/flowers_mtedvz.jpg", grad:"linear-gradient(160deg,#3D0A1E,#BE185D)" },
  { key:"rangoli",  label:"Rangoli & Festivals",  sublabel:"Festival art",         img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/rangoli_oz2jbo.jpg", grad:"linear-gradient(160deg,#0A2E0A,#16A34A)" },
];

export const WHATWEDO_CARDS = [
  { emoji:"📜", grad:"linear-gradient(135deg,#7B1D00,#D6246E)", label:"Ritual Documentation", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/diya_errxmu.jpg"     },
  { emoji:"🌸", grad:"linear-gradient(135deg,#14532D,#16A34A)", label:"Sacred Offerings",     img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/flowers_mtedvz.jpg"  },
  { emoji:"🪔", grad:"linear-gradient(135deg,#7A4100,#D97706)", label:"Festival Calendar",    img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595951/festival_jf8las.jpg" },
  { emoji:"✨", grad:"linear-gradient(135deg,#1E1B4B,#7C3AED)", label:"AI Assistant",         img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/incense_smz7eq.jpg"  },
  { emoji:"📸", grad:"linear-gradient(135deg,#1A3A5C,#0284C7)", label:"Memory Vault",         img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/family_tyaexf.jpg"   },
  { emoji:"🛕", grad:"linear-gradient(135deg,#1A3A1A,#0F7A73)", label:"Family Space",         img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/Temple_qotm2u.jpg"   },
];

export const RITUAL_CARDS = [
  { name:"Namkaran",          grad:"linear-gradient(135deg,#7B3A00,#D6246E)", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/flowers_mtedvz.jpg",  emoji:"👶" },
  { name:"Annaprashan",       grad:"linear-gradient(135deg,#1A3A1A,#16A34A)", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/diya_errxmu.jpg",     emoji:"🍚" },
  { name:"Mundan",            grad:"linear-gradient(135deg,#7A2E00,#EA580C)", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/havan_kq6y9j.jpg",    emoji:"✂️" },
  { name:"Yagnopavitam",      grad:"linear-gradient(135deg,#1A2A5C,#2563EB)", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/Temple_qotm2u.jpg",   emoji:"🧵" },
  { name:"Vivah",             grad:"linear-gradient(135deg,#4A1A6A,#9333EA)", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/wedding_mdlrhu.jpg",  emoji:"💒" },
  { name:"Griha Pravesh",     grad:"linear-gradient(135deg,#1A3A1A,#0F7A73)", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595951/festival_jf8las.jpg", emoji:"🏠" },
  { name:"Satyanarayan Katha",grad:"linear-gradient(135deg,#7A5500,#7A3FD9)", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595952/incense_smz7eq.jpg",  emoji:"🙏" },
  { name:"Shraddha",          grad:"linear-gradient(135deg,#2A2A3A,#475569)", img:"https://res.cloudinary.com/dol1etd26/image/upload/e_improve/e_vibrance:35/c_limit,w_1600/q_auto,f_auto/v1780595953/diya_errxmu.jpg",     emoji:"🕊️" },
];
