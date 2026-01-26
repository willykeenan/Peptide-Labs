export type Product = {
  id: string;
  sku: string;
  slug: string;
  name: string;
  subtitle: string;
  category: string;
  tags: string[];
  price: number;
  isVariable: boolean;
  priceMin?: number;
  priceMax?: number;
  inStock: boolean;
  hasCOA: boolean;
  coaFile?: string;
  coaPath?: string;
  image?: string;
  short: string;
};

export type Collection = {
  slug: string;
  name: string;
  blurb: string;
};

export const COLLECTIONS: Collection[] = [
  { slug: "recovery", name: "Recovery", blurb: "Research peptides commonly used in recovery-focused lab contexts." },
  { slug: "dermal", name: "Dermal", blurb: "Research blends frequently explored for dermal-related investigation." },
  { slug: "metabolic", name: "Metabolic", blurb: "Compounds commonly used in metabolic research." },
  { slug: "essentials", name: "Essentials", blurb: "Accessories and essentials for laboratory workflows." },
] as const;

const normalizeCell = (value: string) => value.trim();

export function parseCsvRows(input: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];
    const next = input[i + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        field += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(normalizeCell(field));
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(normalizeCell(field));
      if (row.some(cell => cell.length > 0)) {
        rows.push(row);
      }
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  row.push(normalizeCell(field));
  if (row.some(cell => cell.length > 0)) {
    rows.push(row);
  }

  return rows;
}

const toBool = (value: string) => value.toLowerCase() === "true";
const toNumber = (value: string) => (value ? Number(value) : undefined);

export function parseProductsCsv(csv: string): Product[] {
  const rows = parseCsvRows(csv);
  const header = rows[0]?.map(h => h.trim());
  if (!header) return [];
  const dataRows = rows.slice(1);

  return dataRows.map((cells, index) => {
    const record: Record<string, string> = {};
    header.forEach((key, i) => {
      record[key] = cells[i] ?? "";
    });

    const tags = record.tags
      ? record.tags.split(",").map(t => t.trim()).filter(Boolean)
      : [];

    const isVariable = toBool(record.isVariable);
    const price = toNumber(record.price) ?? (isVariable ? (toNumber(record.priceMin) ?? 0) : 0);
    const priceMin = toNumber(record.priceMin);
    const priceMax = toNumber(record.priceMax);
    const inStock = toBool(record.inStock);
    const hasCOA = toBool(record.hasCOA);

    return {
      id: `p_${record.slug.replace(/[^a-z0-9]+/gi, "_").toLowerCase() || index}`,
      sku: record.sku,
      slug: record.slug,
      name: record.name,
      subtitle: record.subtitle,
      category: record.category,
      tags,
      price,
      isVariable,
      priceMin,
      priceMax,
      inStock,
      hasCOA,
      coaPath: hasCOA ? `/coas/${record.slug}` : undefined,
      short: record.subtitle,
    };
  });
}

export function formatPriceDisplay(product: Product) {
  if (product.isVariable) {
    const min = product.priceMin ?? product.price;
    const max = product.priceMax ?? product.price;
    return `$${min.toFixed(2)} – $${max.toFixed(2)}`;
  }
  return `$${product.price.toFixed(2)}`;
}

export function getUnitPrice(product: Product) {
  if (product.isVariable) {
    return product.priceMin ?? product.price;
  }
  return product.price;
}

export function matchesCollection(product: Product, collectionName: string) {
  const target = collectionName.toLowerCase();
  const tagMatch = product.tags.some(tag => tag.toLowerCase() === target);
  const categoryMatch = product.category.toLowerCase() === target;
  return tagMatch || categoryMatch;
}

export function sortInStockFirst(products: Product[]) {
  return [...products].sort((a, b) => Number(b.inStock) - Number(a.inStock));
}
