import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGate from "@/components/AgeGate";
import { CartProvider } from "@/components/cart/CartContext";
import { PRODUCTS } from "@/lib/catalog.server";
import DnaHeroBackground from "@/components/DnaHeroBackground";

export const metadata: Metadata = {
  title: "Ascension Labs — Research Peptides & Compounds",
  description: "Premium peptides and compounds. Every product ships with full documentation, certificates of analysis, and lot tracking.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "izoM3pgPMTiiW8MCD36jc5JojHbK1ZwbY14D6qzB5pg",
  },
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
