import trashButton from "../../../../images/cards/trash.svg";
import Confirmation from "../Confirmation/Confirmation.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { handleOpenPopup, card } = props;
  const { name, link, isLiked } = card;

  const imageComponent = {
    title: "",
    children: <ImagePopup card={card} />,
  };

  const confirmationComponent = {
    title: "¿Estás seguro/a?",
    children: <Confirmation />,
  };

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
        onClick={() => handleOpenPopup(confirmationComponent)}
      >
        <img
          src={trashButton}
          alt="Boton para eliminar la tarjeta"
          className="card__trash-btn-image"
        />
      </button>
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <button className="card__like-btn"></button>
      </div>
    </li>
  );
}
