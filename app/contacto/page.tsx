import Link from "next/link";
import ContactForm from "@/components/contact-form";

export const metadata = {
  title: "Contacto | Garage 360",
  description: "Visita Garage 360 en Santa Anita, Jalisco. Consulta dirección, horario y datos de contacto.",
};

const address = "Calz. Virgen de la Candelaria 190B, Haciendas La Candelaria, 45600 Santa Anita, Jalisco, México";
const mapQuery = encodeURIComponent("Calz. Virgen de la Candelaria 190B, Haciendas La Candelaria, 45600 Santa Anita, Jalisco, México");

export default function ContactPage() {
  return (
    <main>
      <section className="page-banner">
        <div className="section-wrap">
          <p className="eyebrow eyebrow-red">Estamos cerca de ti</p>
          <h1>Hablemos de tu próximo servicio</h1>
          <p>Visítanos en Santa Anita o escríbenos, será un gusto ayudarte.</p>
          <div className="breadcrumbs"><Link href="/">Inicio</Link><span>/</span><span>Contacto</span></div>
        </div>
      </section>
      <section className="section-wrap contact-section">
        <div className="contact-details">
          <p className="eyebrow">Garage 360 · Santa Anita</p>
          <h2>¿En qué podemos ayudarte?</h2>
          <p className="contact-intro">Estamos para orientarte y ayudarte a encontrar la refacción adecuada para tu automóvil.</p>
          <div className="contact-detail">
            <span className="detail-icon" aria-hidden="true">⌖</span>
            <div><h3>Visítanos</h3><p>{address}</p><a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer">Cómo llegar <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="contact-detail">
            <span className="detail-icon" aria-hidden="true">◷</span>
            <div><h3>Horario de atención</h3><p>Lunes · 8:00 a 18:00</p><p>Martes a viernes · 9:00 a 18:00</p><p>Sábado y domingo · Cerrado</p></div>
          </div>
          <div className="contact-detail">
            <span className="detail-icon" aria-hidden="true">✉</span>
            <div><h3>Correo electrónico</h3><a href="mailto:garagetres60@gmail.com">garagetres60@gmail.com</a></div>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="section-wrap map-section">
        <div className="map-heading"><div><p className="eyebrow eyebrow-red">Encuéntranos</p><h2>Ven a Garage 360</h2></div><a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noreferrer" className="text-link">Abrir en Google Maps <span aria-hidden="true">↗</span></a></div>
        <iframe className="map-frame" title="Mapa de Garage 360 en Santa Anita, Jalisco" src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </main>
  );
}
