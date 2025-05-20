import closeButton from "../../../../images/profile/Close_Button.svg";

export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <section className={`popup ${!title ? "popup_opacity_high" : ""}`}>
      <div
        className={`${title ? "popup__container" : "popup__container_content"}`}
      >
        <button
          className="popup__close"
          type="button"
          aria-label="Close modal"
          onClick={() => onClose()}
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
