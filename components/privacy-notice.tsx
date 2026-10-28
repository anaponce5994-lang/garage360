"use client";

import { useRef } from "react";

export default function PrivacyNotice() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button className="privacy-trigger" type="button" onClick={() => dialogRef.current?.showModal()}>
        Aviso de Confidencialidad
      </button>
      <dialog
        className="privacy-dialog"
        ref={dialogRef}
        aria-labelledby="privacy-title"
        onClick={(event) => {
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
      >
        <div className="privacy-dialog-header">
          <span className="privacy-label">GARAGE 360 · PRIVACIDAD</span>
          <h2 id="privacy-title">Aviso de Confidencialidad</h2>
        </div>
        <div className="privacy-dialog-content">
          <p>En Garage 360, con domicilio en Calz. Virgen de la Candelaria 190B, Haciendas La Candelaria, Santa Anita, Jalisco, cuidamos la privacidad de nuestros clientes y la información que nos comparten.</p>

          <h3>Datos personales que recabamos</h3>
          <p>Podemos solicitar tu nombre, teléfono y correo electrónico cuando realizas una consulta o te comunicas con nosotros.</p>

          <h3>Uso de tus datos</h3>
          <p>Utilizamos esta información únicamente para atender pedidos, preparar cotizaciones y ponernos en contacto contigo en relación con tus solicitudes y nuestros productos.</p>

          <h3>Confidencialidad</h3>
          <p>No compartimos tus datos personales con terceros. Los utilizamos para los fines descritos en este aviso.</p>

          <h3>Corrección o eliminación de tus datos</h3>
          <p>Puedes solicitar la corrección o eliminación de tus datos personales escribiendo a <a href="mailto:garagetres60@gmail.com">garagetres60@gmail.com</a>. Incluye tu nombre y la solicitud que deseas realizar para que podamos atenderte.</p>
        </div>
        <div className="privacy-dialog-actions">
          <form method="dialog">
            <button className="button button-red" type="submit">Cerrar</button>
          </form>
        </div>
      </dialog>
    </>
  );
}
