import fs from "fs";
import path from "path";
import {
  COLLECTIONS,
  parseProductsCsv,
  sortInStockFirst,
} from "@/lib/catalog";

const csvPath = path.join(process.cwd(), "data", "products.csv");
const csv = fs.readFileSync(csvPath, "utf8");

export const PRODUCTS = parseProductsCsv(csv);
export const FEATURED = sortInStockFirst(PRODUCTS.filter(p => p.tags.includes("Featured")));
export const RECENT = sortInStockFirst(PRODUCTS).slice(0, 4);
export { COLLECTIONS };
