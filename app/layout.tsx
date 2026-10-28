import type { Metadata } from "next";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garage 360 | Refacciones automotrices",
  description: "Venta de refacciones, bujías, aceite, filtros, químicos y consumibles para el mantenimiento automotriz en Santa Anita, Jalisco.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
