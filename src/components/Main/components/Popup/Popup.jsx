import closeButton from "../../../../images/profile/Close_Button.svg";
import { useEffect, useRef } from "react";

export default function Popup(props) {
  const { onClose, title, children } = props;

  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // popupRef.current es siempre el div que tiene el atributo ref
      // event.target es el elemento actual al que se le hizo click
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Cierra el popup cualdo se hace click afuera
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose(); // Cierra el popup cualdo se aplasta escape
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <section className={`popup ${!title ? "popup_opacity_high" : ""}`}>
      <div
        className={`${title ? "popup__container" : "popup__container_content"}`}
        ref={popupRef}
      >
        <button
          className="popup__close"
          type="button"
          aria-label="Close modal"
          // onClick={() => onClose()} // Llamar a una funcion sin hook callback
          onClick={onClose} // Cierra el popup al hacer click en la X
        >
          <img
            className="popup__close-img"
            src={closeButton}
            alt="Boton para cerrar ventana"
          />
        </button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </section>
  );
}
