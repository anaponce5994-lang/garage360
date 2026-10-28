"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Consulta desde Garage 360: ${data.get("subject")}`);
    const body = encodeURIComponent(`Nombre: ${data.get("name")}\nCorreo: ${data.get("email")}\n\nMensaje:\n${data.get("message")}`);
    window.location.href = `mailto:garagetres60@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <p className="eyebrow eyebrow-red">Escríbenos</p>
      <h2>Envíanos un mensaje</h2>
      <p className="form-description">Cuéntanos qué refacción necesitas y nos pondremos en contacto contigo.</p>
      <div className="form-row">
        <label>Nombre<input name="name" type="text" autoComplete="name" placeholder="Tu nombre" required /></label>
        <label>Correo electrónico<input name="email" type="email" autoComplete="email" placeholder="tu@correo.com" required /></label>
      </div>
      <label>Asunto<input name="subject" type="text" placeholder="¿En qué podemos ayudarte?" required /></label>
      <label>Mensaje<textarea name="message" rows={5} placeholder="Escribe aquí tu mensaje..." required /></label>
      <button className="button button-red" type="submit">Preparar mensaje <span aria-hidden="true">→</span></button>
      {sent && <p className="form-notice" role="status">Se abrirá tu aplicación de correo para enviar el mensaje a Garage 360.</p>}
      <p className="form-disclaimer">El mensaje se prepara en tu aplicación de correo; no se envía desde este sitio.</p>
    </form>
  );
}
