import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({ name, link });
  };

  return (
    <form className="form" id="card-form" noValidate onSubmit={handleSubmit}>
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
          onChange={handleNameChange}
        />
        <span className="form__input-error" id="card-name-input-error"></span>
        <input
          className="form__input"
          type="url"
          placeholder="Enlace a la imagen"
          required
          id="link-input"
          name="link-input"
          onChange={handleLinkChange}
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
