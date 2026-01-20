export type Product = {
  id: string;
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
    id: "p_bpc_5",
    slug: "bpc-157-5mg",
    name: "BPC-157",
    subtitle: "Research peptide • 5mg",
    price: 29,
    category: "Singles",
    tags: ["Recovery", "RUO", "COA"],
    format: "Lyophilized powder",
    inStock: true,
    coaPath: "/coas/bpc-157-5mg",
    short: "Lot-tracked. Third-party COA available."
  },
  {
    id: "p_tb500_5",
    slug: "tb-500-5mg",
    name: "TB-500",
    subtitle: "Research peptide • 5mg",
    price: 39,
    category: "Singles",
    tags: ["Recovery", "RUO", "COA"],
    format: "Lyophilized powder",
    inStock: true,
    coaPath: "/coas/tb-500-5mg",
    short: "Transparent documentation with COA link."
  },
  {
    id: "p_ghkcu_50",
    slug: "ghk-cu-50mg",
    name: "GHK-Cu",
    subtitle: "Copper peptide • 50mg",
    price: 44,
    category: "Singles",
    tags: ["Dermal", "RUO", "COA"],
    format: "Lyophilized powder",
    inStock: true,
    coaPath: "/coas/ghk-cu-50mg",
    short: "Batch documentation and purity reporting."
  },
  {
    id: "p_complex_dermal",
    slug: "dermal-research-complex",
    name: "Dermal Research Complex",
    subtitle: "Multi-peptide blend • 70mg",
    price: 69,
    compareAt: 79,
    category: "Blends",
    tags: ["Dermal", "Blend", "RUO", "COA"],
    format: "Lyophilized powder",
    inStock: true,
    coaPath: "/coas/dermal-research-complex",
    short: "Premium blend with COA & lot tracking."
  },
  {
    id: "p_bac_water",
    slug: "bacteriostatic-water-30ml",
    name: "Bacteriostatic Water",
    subtitle: "Lab accessory • 30mL",
    price: 15,
    category: "Accessories",
    tags: ["Essentials", "Accessory"],
    format: "Accessory",
    inStock: true,
    coaPath: "/coas/bacteriostatic-water-30ml",
    short: "Accessory item for lab workflows."
  }
];

export const FEATURED = PRODUCTS.slice(0, 4);
export const RECENT = PRODUCTS.slice(1, 5);
