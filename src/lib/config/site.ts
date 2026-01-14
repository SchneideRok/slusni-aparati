export const siteConfig = {
  name: "ORL Medicina - Slušni aparati",
  description:
    "Danavox slušni aparati - danska kakovost z 80-letno tradicijo. ORL Medicina Ljubljana.",
  url: "https://slusni-aparati.orlmedicina.si",
  ogImage: "/og-image.jpg",
  contact: {
    phone: "+38612345678",
    phoneDisplay: "01 234 56 78",
    email: "info@orlmedicina.si",
    address: "Dunajska cesta 123, 1000 Ljubljana",
    businessHours: {
      weekdays: "8:00 - 18:00",
      saturday: "8:00 - 12:00",
    },
  },
  social: {
    facebook: "https://facebook.com/orlmedicina",
    instagram: "https://instagram.com/orlmedicina",
  },
};

export const products = [
  {
    id: "v-usesni",
    slug: "v-usesni",
    title: "V-ušesni slušni aparati",
    titleEn: "In-ear hearing aids",
    description:
      "Diskretni in udobni aparati, ki se popolnoma prilegajo ušesu.",
    descriptionEn:
      "Discrete and comfortable devices that fit perfectly in the ear.",
    icon: "Ear",
    features: ["Diskretni", "Udobni", "Po meri"],
  },
  {
    id: "za-usesni",
    slug: "za-usesni",
    title: "Za-ušesni slušni aparati",
    titleEn: "Behind-ear hearing aids",
    description:
      "Zmogljivi aparati z najnovejšo tehnologijo za vse stopnje naglušnosti.",
    descriptionEn:
      "Powerful devices with latest technology for all levels of hearing loss.",
    icon: "Headphones",
    features: ["Zmogljivi", "Bluetooth", "Polnjenje"],
  },
];

export const conditions = [
  {
    id: "tinitus",
    slug: "tinitus",
    title: "Tinitus",
    titleEn: "Tinnitus",
    description: "Šumenje v ušesih - vzroki, simptomi in sodobne rešitve.",
    descriptionEn: "Ringing in ears - causes, symptoms and modern solutions.",
    icon: "Volume2",
  },
  {
    id: "naglusnost",
    slug: "naglusnost",
    title: "Naglušnost",
    titleEn: "Hearing Loss",
    description: "Postopna izguba sluha - kako jo prepoznati in zdraviti.",
    descriptionEn: "Gradual hearing loss - how to recognize and treat it.",
    icon: "EarOff",
  },
  {
    id: "cerumen",
    slug: "cerumen",
    title: "Cerumen",
    titleEn: "Earwax",
    description:
      "Profesionalno čiščenje ušes in odstranjevanje ušesnega masla.",
    descriptionEn: "Professional ear cleaning and earwax removal.",
    icon: "Droplets",
  },
];

export const benefits = [
  {
    title: "80+ let tradicije",
    titleEn: "80+ years of tradition",
    description: "Danavox - danska blagovna znamka z dolgoletnimi izkušnjami.",
    descriptionEn: "Danavox - Danish brand with decades of experience.",
    icon: "Award",
  },
  {
    title: "iSolate Nanotech",
    titleEn: "iSolate Nanotech",
    description: "Zaščita pred vlago, znojem in umazanijo.",
    descriptionEn: "Protection against moisture, sweat and dirt.",
    icon: "Shield",
  },
  {
    title: "Bluetooth povezava",
    titleEn: "Bluetooth connection",
    description: "2.4 GHz povezljivost z vašim telefonom in TV.",
    descriptionEn: "2.4 GHz connectivity with your phone and TV.",
    icon: "Bluetooth",
  },
  {
    title: "Aplikacija",
    titleEn: "App control",
    description: "Upravljajte nastavitve preko pametne aplikacije.",
    descriptionEn: "Manage settings through smart app.",
    icon: "Smartphone",
  },
  {
    title: "Naraven zvok",
    titleEn: "Natural sound",
    description: "Vrhunska kakovost zvoka za naravno poslušanje.",
    descriptionEn: "Premium sound quality for natural listening.",
    icon: "Music",
  },
  {
    title: "ZZZS partner",
    titleEn: "ZZZS partner",
    description: "Povrnitev stroškov preko zdravstvenega zavarovanja.",
    descriptionEn: "Cost reimbursement through health insurance.",
    icon: "BadgeCheck",
  },
];

export const faqItems = [
  {
    question: "Kako izberem pravi slušni aparat?",
    questionEn: "How do I choose the right hearing aid?",
    answer:
      "Naši strokovnjaki vam bodo na brezplačnem pregledu pomagali izbrati aparat, ki najbolj ustreza vaši stopnji naglušnosti, življenjskemu slogu in proračunu.",
    answerEn:
      "Our specialists will help you choose the device that best suits your hearing level, lifestyle and budget during a free examination.",
  },
  {
    question: "Ali ZZZS krije stroške slušnega aparata?",
    questionEn: "Does ZZZS cover hearing aid costs?",
    answer:
      "Da, ZZZS krije del stroškov slušnega aparata na podlagi napotnice. Za podrobnosti o višini kritja se obrnite na nas.",
    answerEn:
      "Yes, ZZZS covers part of the hearing aid costs based on a referral. Contact us for details about coverage amounts.",
  },
  {
    question: "Kako poteka postopek naročila?",
    questionEn: "How does the ordering process work?",
    answer:
      "1) Naročite se na brezplačni pregled sluha. 2) Skupaj izberemo najprimernejši aparat. 3) Aparat prilagodimo vašemu ušesu. 4) Spremljamo vašo prilagoditev.",
    answerEn:
      "1) Book a free hearing test. 2) We select the most suitable device together. 3) We fit the device to your ear. 4) We monitor your adjustment.",
  },
  {
    question: "Kako vzdržujem slušni aparat?",
    questionEn: "How do I maintain my hearing aid?",
    answer:
      "Redno čiščenje, suho shranjevanje in menjava baterij/polnjenje. Ponujamo tudi servisne preglede in profesionalno čiščenje.",
    answerEn:
      "Regular cleaning, dry storage and battery replacement/charging. We also offer service checkups and professional cleaning.",
  },
];
