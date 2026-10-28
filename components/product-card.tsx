import type { Product } from "@/lib/store";
import ProductArtwork from "@/components/product-artwork";

export default function ProductCard({ product }: { product: Product }) {
  const search = encodeURIComponent(`${product.name} ${product.brand}`);
  return (
    <article className="product-card">
      <div className="product-image">
        {product.oldPrice && <span className="sale-tag">OFERTA</span>}
        <ProductArtwork type={product.artwork} />
      </div>
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <h3>{product.name}</h3>
        <div className="product-price">
          <strong>${product.price.toLocaleString("es-MX")} <small>MXN</small></strong>
          {product.oldPrice && <del>${product.oldPrice.toLocaleString("es-MX")}</del>}
        </div>
        <a className="button button-red buy-button" href={`https://listado.mercadolibre.com.mx/${search}`} target="_blank" rel="noreferrer">
          Comprar en Mercado Libre <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
