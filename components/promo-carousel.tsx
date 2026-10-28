"use client";

import { useState } from "react";
import Link from "next/link";

const slides = [
  { eyebrow: "Prepara tu auto para el camino", title: "Kits de afinación para Tsuru, Chevy y Pointer", copy: "Todo lo que necesitas para un mantenimiento completo, en un solo lugar.", tag: "MANTENIMIENTO SIN COMPLICACIONES", cta: "Ver kits de afinación", href: "/catalogo?categoria=Kits%20de%20Afinaci%C3%B3n" },
  { eyebrow: "Cuida cada kilómetro", title: "Aceites y aditivos para el cuidado de tu motor", copy: "Encuentra productos confiables para el rendimiento que tu auto merece.", tag: "CUIDADO DEL MOTOR", cta: "Explorar aceites", href: "/catalogo?categoria=Aceites" },
  { eyebrow: "Enciende la confianza", title: "Bujías y filtros para un mejor desempeño", copy: "Refacciones esenciales para que tu próximo servicio quede completo.", tag: "REFACCIONES ESENCIALES", cta: "Ver catálogo", href: "/catalogo" },
];

export default function PromoCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const move = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);

  return (
    <section className="hero" aria-roledescription="carrusel" aria-label="Promociones Garage 360">
      <div className="hero-grid-pattern" />
      <div className="section-wrap hero-inner">
        <div className="hero-copy" key={slide.title}>
          <span className="hero-tag"><i /> {slide.tag}</span>
          <p className="hero-eyebrow">{slide.eyebrow}</p>
          <h1>{slide.title}</h1>
          <p className="hero-description">{slide.copy}</p>
          <div className="hero-actions">
            <Link className="button button-red" href={slide.href}>{slide.cta} <span aria-hidden="true">→</span></Link>
            <Link className="hero-secondary" href="/contacto">Conoce Garage 360 <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-big-number">360</div>
          <div className="hero-product-card hero-card-one"><span className="mini-product-icon">✦</span><span><b>Calidad</b><small>en cada pieza</small></span></div>
          <div className="hero-product-card hero-card-two"><span className="mini-product-icon">⚙</span><span><b>Tu auto</b><small>en buenas manos</small></span></div>
          <div className="hero-stamp"><b>GARAGE</b><strong>360°</strong><small>EN MARCHA</small></div>
        </div>
      </div>
      <div className="section-wrap hero-controls">
        <div className="hero-dots" aria-label="Seleccionar promoción">
          {slides.map((item, index) => <button key={item.tag} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={`Promoción ${index + 1}`} aria-current={index === active ? "true" : undefined} />)}
        </div>
        <div className="slide-controls">
          <span>0{active + 1} <i>/</i> 0{slides.length}</span>
          <button type="button" onClick={() => move(-1)} aria-label="Promoción anterior">←</button>
          <button type="button" onClick={() => move(1)} aria-label="Siguiente promoción">→</button>
        </div>
      </div>
    </section>
  );
}
