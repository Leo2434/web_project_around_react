export default function ImagePopup(props) {
  const { name, link } = props.card;
  return (
    <>
      <img
        src={link}
        alt="Imagen emergente expandida"
        className="popup__expanded-image"
      />
      <p className="popup__image-name">{name}</p>
    </>
  );
}
