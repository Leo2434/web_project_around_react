import editButton from "../../images/profile/Edit_Button.svg";
import addButton from "../../images/profile/Add_Button.svg";
import { useState, useEffect, useCallback, useContext } from "react";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/NewCard/NewCard.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/EditAvatar/EditAvatar.jsx";
import Card from "./components/Card/Card.jsx";
import api from "../../utils/api.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const newProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
  const newAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  const [cards, setCards] = useState([]);
  useEffect(() => {
    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  const handleClosePopup = useCallback(() => {
    setPopup(null);
  }, []); //vuelve a crear esta función solo si alguna de sus dependencias cambia (en este caso, ninguna)

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="container">
      <section className="profile" id="profile">
        <div className="profile__columns">
          <div className="profile__column">
            <div className="profile__image">
              <img
                src={currentUser.avatar}
                alt="Avatar del perfil"
                className="profile__avatar"
              />
              <button
                className="profile__avatar-btn"
                type="button"
                id="avatar-open-btn"
                onClick={() => handleOpenPopup(newAvatarPopup)}
              ></button>
            </div>
          </div>
          <div className="profile__column">
            <div className="profile__info">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__open-btn"
                type="button"
                id="profile-open-btn"
                onClick={() => handleOpenPopup(newProfilePopup)}
              >
                <img
                  src={editButton}
                  alt="Botón para editar perfil"
                  className="profile__open-btn-image"
                />
              </button>
              <p className="profile__about">{currentUser.about}</p>
            </div>
          </div>
          <button
            className="profile__card-btn"
            type="button"
            id="card-open-btn"
            onClick={() => handleOpenPopup(newCardPopup)}
          >
            <img
              src={addButton}
              alt="Botón para agregar nueva tarjeta de imagen"
              className="profile__card-btn-image"
            />
          </button>
        </div>
      </section>
      <section className="cards">
        <ul className="cards__content">
          {cards &&
            cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                handleOpenPopup={handleOpenPopup}
              />
            ))}
        </ul>
      </section>
      {popup && (
        <Popup
          onClose={handleClosePopup}
          title={popup.title}
          children={popup.children}
        ></Popup>
      )}
    </main>
  );
}

export default Main;
