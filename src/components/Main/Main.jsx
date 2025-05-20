import editButton from "../../images/profile/Edit_Button.svg";
import addButton from "../../images/profile/Add_Button.svg";
import avatar from "../../images/profile/Avatar.png";
import { useState } from "react";
import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/NewCard/NewCard.jsx";
import EditProfile from "./components/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/EditAvatar/EditAvatar.jsx";
import Card from "./components/Card/Card.jsx";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const newProfilePopup = { title: "Editar Perfil", children: <EditProfile /> };
  const newAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="container">
      <section className="profile" id="profile">
        <div className="profile__columns">
          <div className="profile__column">
            <div className="profile__image">
              <img
                src={avatar}
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
              <h1 className="profile__name">Jacques Cousteau</h1>
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
              <p className="profile__about">Explorador</p>
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
          {cards.map((card) => (
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
