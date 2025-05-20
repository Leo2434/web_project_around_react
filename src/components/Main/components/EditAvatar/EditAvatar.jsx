export default function EditAvatar() {
  return (
    <form className="form" id="card-form" noValidate>
      <fieldset className="form__fieldset">
        <input
          className="form__input"
          type="url"
          placeholder="Enlace a la imagen"
          required
          id="link-input"
          name="link-input"
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
