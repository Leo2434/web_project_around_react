import trashButton from "../../../../images/cards/trash.svg";
import ConfirmationPopup from "../Confirmation/Confirmation.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { handleOpenPopup, card, onCardLike, onCardDelete } = props;
  const { name, link, isLiked } = card;

  const imageComponent = {
    title: "",
    children: <ImagePopup card={card} />,
  };

  const confirmationComponent = {
    title: "¿Estás seguro/a?",
    children: <ConfirmationPopup />,
  };

  // Verifica si el usuario actual le ha dado "like" a la tarjeta
  const cardLikeButtonClassName = `card__like-btn ${
    isLiked ? "card__like-btn_is-active" : ""
  }`;

  function handleLikeClick(card) {
    onCardLike(card);
  }

  function handleDeleteClick(card) {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={() => handleOpenPopup(imageComponent)}
      />
      <button
        className="card__trash-btn"
        onClick={() => handleDeleteClick(card)}
        // onClick={() => handleOpenPopup(confirmationComponent)}
      >
        <img
          src={trashButton}
          alt="Boton para eliminar la tarjeta"
          className="card__trash-btn-image"
        />
      </button>
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <button
          className={cardLikeButtonClassName}
          onClick={() => handleLikeClick(card)}
        ></button>
      </div>
    </li>
  );
}
