import { useState, useContext } from "react";
import { CurrentUserContext } from "../../../../contexts/CurrentUserContext.js";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext); // Obtiene el objeto currentUser

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del envío de formularios
    handleUpdateUser({ name, about: description }); // Actualiza la información del usuario
  };

  return (
    <form
      className="form"
      id="profile-form"
      name="profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
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
          value={name}
          onChange={handleNameChange}
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
          value={description}
          onChange={handleDescriptionChange}
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
