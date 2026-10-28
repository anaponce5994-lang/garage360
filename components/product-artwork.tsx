type ArtworkType = "plug" | "oil" | "filter" | "spray" | "kit";

export default function ProductArtwork({ type }: { type: ArtworkType }) {
  return (
    <div className={`artwork artwork-${type}`} aria-hidden="true">
      {type === "plug" && <svg viewBox="0 0 120 140"><path d="M47 13h26v12H47zm-4 12h34v42H43zM40 67h40v17H40zm7 17h26v14H47zm8 14h10v20H55zm0 20h10v9H55zm-8-72h26v7H47z" /><path d="M48 53h24M45 73h30M50 89h20" className="artwork-line" /></svg>}
      {type === "oil" && <svg viewBox="0 0 120 140"><path d="M48 15h25v12H48zm5 12h33v9H53zm-7 9h43l6 14v68H36V50z" /><path d="M48 69h41v31H48z" className="artwork-label" /><path d="M54 78h28M54 85h20M54 92h23" className="artwork-line" /></svg>}
      {type === "filter" && <svg viewBox="0 0 120 140"><path d="M24 37h72v67l-10 13H34l-10-13z" /><path d="M35 42v62m10-62v62m10-62v62m10-62v62m10-62v62m10-62v62" className="artwork-line" /></svg>}
      {type === "spray" && <svg viewBox="0 0 120 140"><path d="M51 18h25v10H51zm5-8h20v8H56zm19 13h23v10H75zm-27 5h31v14H48zM42 42h48l8 13v59H34V55z" /><path d="M44 69h45v25H44z" className="artwork-label" /><path d="M52 77h28m-28 8h20" className="artwork-line" /></svg>}
      {type === "kit" && <svg viewBox="0 0 120 140"><path d="M16 37h88v72H16z" /><path d="M16 54h88v11H16zM28 37V27h20v10m24 0V27h20v10" className="artwork-line" /><circle cx="40" cy="84" r="11" className="artwork-label" /><path d="M40 78v12m-5-6h10m20 10 14-21 14 21z" className="artwork-label" /></svg>}
    </div>
  );
}
