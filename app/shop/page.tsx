import ProductGrid from "@/components/ProductGrid";
import { PRODUCTS } from "@/lib/catalog";

export default function ShopPage() {
  return (
    <>
      <h1 style={{ marginBottom: 6 }}>Shop</h1>
      <p className="p" style={{ maxWidth: 960, marginTop: 0 }}>
        Demo catalog. All items are supplied strictly for laboratory research and analytical purposes only. Not for human consumption.
      </p>
      <ProductGrid products={PRODUCTS} />
    </>
  );
}
