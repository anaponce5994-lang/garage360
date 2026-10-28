import { Suspense } from "react";
import CatalogBrowser from "@/components/catalog-browser";
import { brands, categories, products } from "@/lib/store";
import Link from "next/link";

export const metadata = {
  title: "Catálogo | Garage 360",
  description: "Explora refacciones, aceites, bujías, filtros y productos de mantenimiento automotriz.",
};

export default function CatalogPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="section-wrap">
          <p className="eyebrow eyebrow-red">Encuentra lo que buscas</p>
          <h1>Catálogo de productos</h1>
          <p>Refacciones y consumibles para el mantenimiento de tu automóvil.</p>
          <div className="breadcrumbs"><Link href="/">Inicio</Link><span>/</span><span>Catálogo</span></div>
        </div>
      </section>
      <Suspense fallback={<div className="section-wrap catalog-section"><p>Cargando catálogo...</p></div>}>
        <CatalogBrowser products={products} categories={categories} brands={brands} />
      </Suspense>
    </main>
  );
}
