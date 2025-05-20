export default function EditProfile() {
  return (
    <form className="form" id="profile-form" noValidate>
      <fieldset className="form__fieldset">
        <input
          className="form__input"
          type="text"
          placeholder="Nombre"
          required
          id="name-input"
          name="name-input"
          minLength="2"
          maxLength="40"
        />
        <span className="form__input-error" id="name-input-error"></span>
        <input
          className="form__input"
          type="text"
          placeholder="Acerca de mi"
          required
          id="about-input"
          name="about-input"
          minLength="2"
          maxLength="200"
        />
        <span className="form__input-error" id="about-input-error"></span>
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
