export type Product = {
  id: string;
  sku: string;
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  compareAt?: number;
  category: "Singles" | "Blends" | "Accessories";
  tags: string[];
  format: string;
  inStock: boolean;
  coaPath: string;
  short: string;
};

export const COLLECTIONS = [
  { slug: "recovery", name: "Recovery", blurb: "Research peptides commonly used in recovery-focused lab contexts." },
  { slug: "dermal", name: "Dermal", blurb: "Research blends frequently explored for dermal-related investigation." },
  { slug: "metabolic", name: "Metabolic", blurb: "Compounds commonly used in metabolic research." },
  { slug: "essentials", name: "Essentials", blurb: "Accessories and essentials for laboratory workflows." },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "p_klow_kl80",
    sku: "KL80",
    slug: "klow-kl80",
    name: "KLOW",
    subtitle: "Multi-Peptide Dermal Research Complex",
    price: 60,
    category: "Blends",
    tags: ["Dermal", "Blends", "Featured"],
    format: "Lyophilized peptide blend • vial",
    inStock: true,
    coaPath: "/coas/klow-kl80",
    short: "A multi-peptide dermal research complex for laboratory and analytical workflows. Lot tracked with COA documentation."
  },
  {
    id: "p_reta_rt10",
    sku: "RT10",
    slug: "reta-rt10",
    name: "RETA",
    subtitle: "Tri-Agonist Metabolic Research Peptide",
    price: 75,
    category: "Singles",
    tags: ["Metabolic", "Research", "Featured"],
    format: "Lyophilized peptide • vial",
    inStock: true,
    coaPath: "/coas/reta-rt10",
    short: "A tri-agonist research peptide for metabolic pathway studies. Lot tracked with COA documentation."
  },
  {
    id: "p_bpc_5",
    sku: "BPC5",
    slug: "bpc-157-5mg",
    name: "BPC-157",
    subtitle: "Research peptide • 5mg",
    price: 29,
    category: "Singles",
    tags: ["Recovery", "Research", "COA"],
    format: "Lyophilized powder",
    inStock: false,
    coaPath: "/coas/bpc-157-5mg",
    short: "Lot-tracked. Third-party COA available."
  },
  {
    id: "p_tb500_5",
    sku: "TB5",
    slug: "tb-500-5mg",
    name: "TB-500",
    subtitle: "Research peptide • 5mg",
    price: 39,
    category: "Singles",
    tags: ["Recovery", "Research", "COA"],
    format: "Lyophilized powder",
    inStock: false,
    coaPath: "/coas/tb-500-5mg",
    short: "Transparent documentation with COA link."
  },
  {
    id: "p_ghkcu_50",
    sku: "GHK50",
    slug: "ghk-cu-50mg",
    name: "GHK-Cu",
    subtitle: "Copper peptide • 50mg",
    price: 44,
    category: "Singles",
    tags: ["Dermal", "Research", "COA"],
    format: "Lyophilized powder",
    inStock: false,
    coaPath: "/coas/ghk-cu-50mg",
    short: "Batch documentation and purity reporting."
  },
  {
    id: "p_complex_dermal",
    sku: "GL55",
    slug: "dermal-research-complex",
    name: "GLOW Dermal Peptide Research Complex",
    subtitle: "Multi-peptide blend • 70mg",
    price: 55,
    category: "Blends",
    tags: ["Dermal", "Blends", "COA"],
    format: "Lyophilized powder",
    inStock: false,
    coaPath: "/coas/dermal-research-complex",
    short: "Dermal-focused blend with lot tracking and COA documentation."
  },
  {
    id: "p_bac_water",
    sku: "BAC30",
    slug: "bacteriostatic-water-30ml",
    name: "Bacteriostatic Water 30mL",
    subtitle: "Sterile Lab Accessory",
    price: 15,
    category: "Accessories",
    tags: ["Essentials", "Accessories", "Featured"],
    format: "30mL vial",
    inStock: true,
    coaPath: "/coas/bacteriostatic-water-30ml",
    short: "Sterile bacteriostatic water for laboratory workflows."
  }
];

export const FEATURED = PRODUCTS.filter(p => p.inStock && p.tags.includes("Featured"));
export const RECENT = PRODUCTS.slice(1, 5);
