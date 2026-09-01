export type ProductConfig = {
  slug: string;
  name: string;
  title: string;
  heroTitle: string;
  eyebrow: string;
  category: string;
  heroImage: string;
  image: string;
  description: string;
  details: string;
  submitSubject: string;
};

export const products: Record<string, ProductConfig> = {
  details: {
    slug: "details",
    name: "Private Label Boxing Gloves",
    title: "Private Label Boxing Gloves",
    heroTitle: "Private Label Boxing Gloves Manufacturer",
    eyebrow: "Uniform Manufacturing",
    category: "Boxing Equipment",
    heroImage: "/Page 3/Container.png",
    image: "/Products/01 Private Label Boxing Gloves.png",
    description: "Custom heavyweight and lightweight boxing gloves manufacturing for gyms, academies, retailers, and boxing brands.",
    details: "Sarlam Athletics manufactures premium private label boxing gloves for sports brands, gyms, retailers, distributors, and wholesalers. We offer OEM manufacturing, custom branding, premium materials, flexible minimum order quantities, and factory-direct production for training, sparring, fitness, and competition boxing gloves.",
    submitSubject: "Product Details Page",
  },
  jitsu: {
    slug: "jitsu",
    name: "Private Label Jiu Jitsu Suits",
    title: "Private Label Jiu Jitsu Suits",
    heroTitle: "Private Label Jiu Jitsu Suit Manufacturer",
    eyebrow: "Martial Arts Uniform Manufacturing",
    category: "Martial Arts Uniforms",
    heroImage: "/Page 7/01-1.png",
    image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png",
    description: "Custom BJJ gi and jiu-jitsu uniform manufacturing for academies, teams, retailers, and martial arts brands.",
    details: "Sarlam Athletics manufactures private label BJJ gis and jiu-jitsu uniforms with custom fabrics, sizing, colors, embroidery, labels, packaging, and branding for wholesale production.",
    submitSubject: "Jiu Jitsu Suit",
  },
  mmagloves: {
    slug: "mmagloves",
    name: "Private Label MMA Fight Gloves",
    title: "Private Label MMA Fight Gloves",
    heroTitle: "Private Label MMA Fight Gloves Manufacturer",
    eyebrow: "MMA Equipment Manufacturing",
    category: "MMA Equipment",
    heroImage: "/Page 7/01-1.png",
    image: "/Products/03 MMA Fight Gloves.png",
    description: "Custom MMA fight glove manufacturing for combat sports brands, gyms, retailers, and distributors.",
    details: "Sarlam Athletics manufactures private label MMA gloves with custom materials, padding, sizing, wrist closures, colorways, branding, labels, and packaging for wholesale production.",
    submitSubject: "MMA Full Fight Gloves",
  },
  ultimategloves: {
    slug: "ultimategloves",
    name: "Professional MMA Training Gloves",
    title: "Professional MMA Training Gloves",
    heroTitle: "Professional MMA Training Gloves Manufacturer",
    eyebrow: "MMA Equipment Manufacturing",
    category: "MMA Equipment",
    heroImage: "/Page 7/01-1.png",
    image: "/Products/MMATrainingGloves.png",
    description: "Custom professional MMA training glove manufacturing for daily training, pad work, and combat sports brands.",
    details: "Sarlam Athletics manufactures private label MMA training gloves with custom construction, padding, materials, sizing, wrist support, branding, packaging, and quality control.",
    submitSubject: "Ultimate MMA Fight Gloves",
  },
  trainingpad: {
    slug: "trainingpad",
    name: "Training Pads (Focus Mitts & Thai Pads)",
    title: "Training Pads (Focus Mitts & Thai Pads)",
    heroTitle: "Private Label Training Pads Manufacturer",
    eyebrow: "Martial Arts Equipment Manufacturing",
    category: "Training Equipment",
    heroImage: "/Page 7/01-1.png",
    image: "/Products/05 Boxing Mitts and Training Pads.png",
    description: "Custom athletic pad manufacturing, including focus mitts and Thai pads for coaches and academy brands.",
    details: "Sarlam Athletics manufactures custom athletic pads and shields for combat sports brands, martial arts academies, gyms, retailers, and distributors. We support custom materials, padding, wrist and arm straps, labels, packaging, and branding details for wholesale production.",
    submitSubject: "Training Pads",
  },
  sparinggloves: {
    slug: "sparinggloves",
    name: "Boxing Practice / Sparring Gloves",
    title: "Boxing Practice / Sparring Gloves",
    heroTitle: "Private Label Boxing Sparring Gloves Manufacturer",
    eyebrow: "Hand Protection Equipment Manufacturing",
    category: "Boxing Equipment",
    heroImage: "/Page 7/01-1.png",
    image: "/Products/06 Boxing Sparring Gloves.png",
    description: "Custom heavily padded practice glove manufacturing optimized for safe partner sparring and daily training.",
    details: "Sarlam Athletics manufactures private-label boxing sparring gloves for gyms, academies, combat sports brands, retailers, and distributors. We support custom materials, construction, sizing, padding, reinforcement, branding, packaging, and wholesale production.",
    submitSubject: "Boxing Sparring Gloves",
  },
  Boxingguard: {
    slug: "Boxingguard",
    name: "Custom Boxing Head Guard",
    title: "Custom Boxing Head Guard",
    heroTitle: "Custom Boxing Head Guard Manufacturer",
    eyebrow: "Protective Equipment Manufacturing",
    category: "Protective Equipment",
    heroImage: "/Page 7/01-1.png",
    image: "/Products/07 Custom Boxing Headguards.png",
    description: "Custom boxing headguard manufacturing for gyms, academies, retailers, and combat sports brands.",
    details: "Sarlam Athletics manufactures private label boxing headguards with custom materials, protection levels, sizing, closures, colors, branding, labels, packaging, and wholesale production support.",
    submitSubject: "Boxing Head Guard",
  },
  karatesuit: {
    slug: "karatesuit",
    name: "Private Label Karate Uniforms",
    title: "Private Label Karate Uniforms",
    heroTitle: "Private Label Karate Uniform Manufacturer",
    eyebrow: "Martial Arts Uniform Manufacturing",
    category: "Martial Arts Uniforms",
    heroImage: "/Page 7/01-1.png",
    image: "/Products/karateuniform.png",
    description: "Custom karate uniform manufacturing for dojos, academies, teams, retailers, and martial arts brands.",
    details: "Sarlam Athletics manufactures private label karate uniforms with custom fabric weights, sizing, colors, embroidery, labels, packaging, and branding for wholesale production.",
    submitSubject: "Karate Uniform",
  },
  kickboxing: {
    slug: "kickboxing",
    name: "Kick Boxing Gloves",
    title: "Kick Boxing Gloves",
    heroTitle: "Private Label Kickboxing Gloves Manufacturer",
    eyebrow: "Martial Arts Equipment Manufacturing",
    category: "Boxing Equipment",
    heroImage: "/Page 7/01-1.png",
    image: "/Products/01 Private Label Boxing Gloves.png",
    description: "Custom kickboxing glove manufacturing designed for heavy bag work, pad work, and sparring.",
    details: "Sarlam Athletics manufactures custom kickboxing gloves for combat sports brands, martial arts academies, gyms, retailers, and distributors. We support custom materials, sizing, colorways, padding, wrist closures, labels, packaging, and branding details for wholesale production.",
    submitSubject: "Kick Boxing Gloves",
  },
};

export const relatedProducts = [
  { name: "Jiu Jitsu Suit (Gi)", href: "/jitsu", cta: "View Product", image: "/Products/02 BJJ Gis and Jiu-Jitsu Uniforms.png" },
  { name: "Boxing Gloves", href: "/details", cta: "View Product", image: "/Products/01 Private Label Boxing Gloves.png" },
  { name: "MMA Full Fight Gloves", href: "/mmagloves", cta: "View Product", image: "/Products/03 MMA Fight Gloves.png" },
  { name: "Boxing Head Guard", href: "/Boxingguard", cta: "View Product", image: "/Products/07 Custom Boxing Headguards.png" },
];
