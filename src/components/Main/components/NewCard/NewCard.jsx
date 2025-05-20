export default function NewCard() {
  return (
    <form className="form" id="card-form" noValidate>
      <fieldset className="form__fieldset">
        <input
          className="form__input"
          type="text"
          placeholder="Título"
          required
          id="card-name-input"
          name="card-name-input"
          minLength="2"
          maxLength="30"
        />
        <span className="form__input-error" id="card-name-input-error"></span>
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
          save="Crear"
          saving="Guardando..."
        >
          Crear
        </button>
      </fieldset>
    </form>
  );
}
