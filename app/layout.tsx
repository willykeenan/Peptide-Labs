import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import { CartProvider } from "@/components/cart/CartContext";
import { PRODUCTS } from "@/lib/catalog.server";
import DnaHeroBackground from "@/components/DnaHeroBackground";

export const metadata: Metadata = {
  title: "Ascension Labs — Demo",
  description: "Ascension Labs demo storefront.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider products={PRODUCTS}>
          <AgeGate />
          <div className="site-background" aria-hidden="true">
            <DnaHeroBackground className="dna-global" />
          </div>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
