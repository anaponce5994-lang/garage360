import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Marcas", href: "/#marcas" },
  { label: "Ofertas", href: "/#ofertas" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export default function SiteHeader() {
  return (
    <header>
      <div className="topbar">
        <div className="section-wrap topbar-inner">
          <a href="mailto:garagetres60@gmail.com" className="top-email"><span aria-hidden="true">✉</span> garagetres60@gmail.com</a>
          <span className="top-note">Refacciones y consumibles para mantenerte en marcha</span>
          <div className="social-links">
            <a href="https://www.facebook.com/share/15TwFaBhP8/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.instagram.com/garage360.gdl" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="main-header section-wrap">
        <Link href="/" className="logo-link" aria-label="Garage 360, inicio">
          <Image src="/logo.jpg" alt="Garage 360" width={72} height={72} priority />
        </Link>
        <Link href="/" className="wordmark"><strong>GARAGE <span>360</span></strong><small>REFACCIONES AUTOMOTRICES</small></Link>
        <form action="/catalogo" className="header-search">
          <label className="sr-only" htmlFor="site-search">Buscar productos</label>
          <input id="site-search" type="search" name="q" placeholder="¿Qué necesita tu auto?" />
          <button type="submit" aria-label="Buscar">⌕</button>
        </form>
        <a className="header-contact" href="tel:+523336840360"><span aria-hidden="true">☎</span><span><small>¿Tienes dudas?</small><strong>Estamos para ayudarte</strong></span></a>
      </div>
      <nav className="nav-bar" aria-label="Navegación principal">
        <div className="section-wrap nav-inner">
          {navigation.map((item) => <Link href={item.href} key={item.label}>{item.label}</Link>)}
          <span className="nav-badge"><span aria-hidden="true">●</span> Calidad y confianza</span>
        </div>
      </nav>
    </header>
  );
}
