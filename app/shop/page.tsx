import ProductGrid from "@/components/ProductGrid";
import { PRODUCTS } from "@/lib/catalog.server";
import { sortInStockFirst } from "@/lib/catalog";

export default function ShopPage() {
  const products = sortInStockFirst(PRODUCTS);

  return (
    <>
      <h1 style={{ marginBottom: 6 }}>Shop</h1>
      <p className="p" style={{ maxWidth: 960, marginTop: 0 }}>
        Demo catalog for internal review and merchandising feedback.
      </p>
      <ProductGrid products={products} />
    </>
  );
}
