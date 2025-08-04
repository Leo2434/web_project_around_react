import { useRef, useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const avatarRef = useRef(null);

  const { handleUpdateAvatar } = useContext(CurrentUserContext); // Obtiene el objeto currentUser

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form className="form" id="card-form" noValidate onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <input
          className="form__input"
          type="url"
          placeholder="Enlace a la imagen"
          required
          id="link-input"
          name="link-input"
          ref={avatarRef}
        />
        <span className="form__input-error" id="link-input-error"></span>
        <button
          className="form__submit-btn"
          type="submit"
          save="Guardar"
          saving="Guardando..."
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
