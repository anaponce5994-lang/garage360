import Link from "next/link";
import PrivacyNotice from "@/components/privacy-notice";

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="section-wrap footer-main">
        <div className="footer-brand">
          <Link href="/" className="footer-wordmark">GARAGE <span>360</span></Link>
          <p>Refacciones, bujías, aceite, filtros, químicos y consumibles para el mantenimiento automotriz.</p>
          <a href="mailto:garagetres60@gmail.com">garagetres60@gmail.com</a>
        </div>
        <div className="footer-column">
          <h3>Acerca</h3>
          <Link href="/#nosotros">Quiénes somos</Link>
          <Link href="/contacto">Visítanos</Link>
          <Link href="/catalogo">Nuestro catálogo</Link>
        </div>
        <div className="footer-column">
          <h3>Promociones</h3>
          <Link href="/#ofertas">Ofertas vigentes</Link>
          <Link href="/catalogo?categoria=Kits%20de%20Afinaci%C3%B3n">Kits de afinación</Link>
          <Link href="/catalogo">Nuevos productos</Link>
        </div>
        <div className="footer-column">
          <h3>Servicio al cliente</h3>
          <Link href="/contacto">Contacto</Link>
          <a href="mailto:garagetres60@gmail.com">Escríbenos por correo</a>
          <a href="tel:+523336840360">Llámanos</a>
        </div>
        <div className="footer-column">
          <h3>Síguenos</h3>
          <a href="https://www.facebook.com/share/15TwFaBhP8/" target="_blank" rel="noreferrer">Facebook ↗</a>
          <a href="https://www.instagram.com/garage360.gdl" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="section-wrap footer-bottom-inner">
          <span>© Garage 360. Todos los derechos reservados.</span>
          <div className="footer-legal">
            <span>Hecho para cuidar lo que te mueve.</span>
            <PrivacyNotice />
          </div>
        </div>
      </div>
    </footer>
  );
}
