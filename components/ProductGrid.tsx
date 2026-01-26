import type { Product } from "@/lib/catalog";
import ProductCard from "@/components/ProductCard";

export default function ProductGrid({
  products,
  variant = "default",
}: {
  products: Product[];
  variant?: "default" | "featured";
}) {
  const imageFit = variant === "featured" ? "contain" : "cover";
  const imageHeight = variant === "featured" ? 220 : 180;

  return (
    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
      {products.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          imageFit={imageFit}
          imageHeight={imageHeight}
        />
      ))}
    </div>
  );
}
