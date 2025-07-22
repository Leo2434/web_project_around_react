export default function ImagePopup(props) {
  const { name, link } = props.card;
  return (
    <>
      <img src={link} alt={name} className="popup__expanded-image" />
      <p className="popup__image-name">{name}</p>
    </>
  );
}
