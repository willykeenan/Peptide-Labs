import fs from "fs";
import path from "path";
import {
  COLLECTIONS,
  parseProductsCsv,
  sortInStockFirst,
} from "@/lib/catalog";

const csvPath = path.join(process.cwd(), "data", "products.csv");
const csv = fs.readFileSync(csvPath, "utf8");
const coaPath = path.join(process.cwd(), "data", "coas.json");
const coaRaw = fs.existsSync(coaPath) ? fs.readFileSync(coaPath, "utf8") : "{}";
const COA_MAP: Record<string, { file: string; lot?: string; date?: string; lab?: string; notes?: string }> =
  JSON.parse(coaRaw);

export const PRODUCTS = parseProductsCsv(csv).map(product => ({
  ...product,
  coaFile: COA_MAP[product.slug]?.file,
}));
export const FEATURED = sortInStockFirst(PRODUCTS.filter(p => p.tags.includes("Featured")));
export const RECENT = sortInStockFirst(PRODUCTS).slice(0, 4);
export { COLLECTIONS };
export { COA_MAP };
