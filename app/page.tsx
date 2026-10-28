import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/lib/store";
import ProductCard from "@/components/product-card";
import PromoCarousel from "@/components/promo-carousel";

const categoryIcons = ["✦", "◉", "▤", "▥", "✧", "⌁", "⚙"];

export default function Home() {
  return (
    <>
      <PromoCarousel />

      <section className="section-wrap py-16 sm:py-20" id="catalogo">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Todo para tu automóvil</p>
            <h2>Categorías destacadas</h2>
          </div>
          <Link className="text-link" href="/catalogo">Ver catálogo completo <span aria-hidden="true">→</span></Link>
        </div>
        <div className="category-grid">
          {categories.map((category, index) => (
            <Link className="category-tile" href={`/catalogo?categoria=${encodeURIComponent(category)}`} key={category}>
              <span className="category-icon" aria-hidden="true">{categoryIcons[index]}</span>
              <span>{category}</span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="brand-strip" id="marcas">
        <div className="section-wrap brand-content">
          <div>
            <p className="eyebrow">Calidad que responde</p>
            <h2>Marcas que conoces</h2>
          </div>
          <div className="brand-list" aria-label="Marcas disponibles">
            <span className="brand-ngk">NGK</span>
            <span className="brand-wd">WD-40</span>
            <span className="brand-ecom">ECOM</span>
            <span className="brand-lucas">LUCAS OIL</span>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 sm:py-20" id="ofertas">
        <div className="section-heading">
          <div>
            <p className="eyebrow eyebrow-red">Precios especiales</p>
            <h2>Ofertas para tu próximo servicio</h2>
          </div>
          <Link className="text-link" href="/catalogo">Explorar productos <span aria-hidden="true">→</span></Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="about-band" id="nosotros">
        <div className="section-wrap about-content">
          <div className="about-mark">
            <Image src="/logo.jpg" alt="Garage 360" width={180} height={180} />
          </div>
          <div className="about-copy">
            <p className="eyebrow eyebrow-light">Una familia detrás de cada servicio</p>
            <h2>Refacciones confiables, atención cercana.</h2>
            <p>En Garage 360 somos un negocio familiar especializado en refacciones y consumibles para el mantenimiento automotriz. Te ayudamos a encontrar lo que necesitas para que tu auto siga en movimiento.</p>
            <Link href="/contacto" className="button button-outline">Conócenos y visítanos <span aria-hidden="true">→</span></Link>
          </div>
          <div className="about-number"><strong>360°</strong><span>atención para<br />tu automóvil</span></div>
        </div>
      </section> 
      <p className="py-6 text-center text-sm">Proyecto final de la materia Ingeniería de software - Ponce Santero Ana Patricia - 214459944</p>
    </>
  );
}
