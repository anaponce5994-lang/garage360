"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { Product } from "@/lib/store";
import ProductCard from "@/components/product-card";

type CatalogBrowserProps = {
  products: Product[];
  categories: string[];
  brands: string[];
};

export default function CatalogBrowser({ products, categories, brands }: CatalogBrowserProps) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("categoria") ?? "";
  const initialBrand = searchParams.get("marca") ?? "";
  return (
    <CatalogContent
      key={`${initialQuery}-${initialCategory}-${initialBrand}`}
      products={products}
      categories={categories}
      brands={brands}
      initialQuery={initialQuery}
      initialCategory={initialCategory}
      initialBrand={initialBrand}
    />
  );
}

type CatalogContentProps = CatalogBrowserProps & {
  initialQuery: string;
  initialCategory: string;
  initialBrand: string;
};

function CatalogContent({ products, categories, brands, initialQuery, initialCategory, initialBrand }: CatalogContentProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLocaleLowerCase("es-MX");
    return products.filter((product) => {
      const matchesSearch = !search || `${product.name} ${product.brand} ${product.category}`.toLocaleLowerCase("es-MX").includes(search);
      return matchesSearch && (!category || product.category === category) && (!brand || product.brand === brand);
    });
  }, [products, query, category, brand]);

  const clearFilters = () => {
    setQuery("");
    setCategory("");
    setBrand("");
  };

  return (
    <section className="section-wrap catalog-section">
        <div className="catalog-toolbar">
          <div>
            <h2>Productos Garage 360</h2>
            <p>{filteredProducts.length} {filteredProducts.length === 1 ? "producto encontrado" : "productos encontrados"}</p>
          </div>
          {(query || category || brand) && <button className="clear-filters" type="button" onClick={clearFilters}>Limpiar filtros <span aria-hidden="true">×</span></button>}
        </div>
        <div className="catalog-layout">
          <aside className="filter-panel" aria-label="Filtros de productos">
            <h3>Filtrar productos</h3>
            <label className="filter-label" htmlFor="catalog-search">Buscar</label>
            <div className="catalog-search">
              <input id="catalog-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Nombre o marca" />
              <span aria-hidden="true">⌕</span>
            </div>
            <label className="filter-label" htmlFor="category-filter">Categoría</label>
            <select id="category-filter" value={category} onChange={(event) => setCategory(event.target.value)}>
              <option value="">Todas las categorías</option>
              {categories.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <label className="filter-label" htmlFor="brand-filter">Marca</label>
            <select id="brand-filter" value={brand} onChange={(event) => setBrand(event.target.value)}>
              <option value="">Todas las marcas</option>
              {brands.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <div className="filter-help"><span aria-hidden="true">✦</span><p>¿No encuentras una pieza? <Link href="/contacto">Contáctanos</Link> y te ayudamos.</p></div>
          </aside>
          <div className="catalog-results">
            {filteredProducts.length ? (
              <div className="product-grid">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="empty-results">
                <span aria-hidden="true">⌕</span>
                <h3>No encontramos productos</h3>
                <p>Prueba con otra búsqueda o quita algunos filtros.</p>
                <button className="button button-dark" type="button" onClick={clearFilters}>Ver todos los productos</button>
              </div>
            )}
          </div>
        </div>
    </section>
  );
}
