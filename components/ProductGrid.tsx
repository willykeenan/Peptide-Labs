import type { Product } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
