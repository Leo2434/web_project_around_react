import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";
import { useState, useEffect, useCallback } from "react";
import api from "../utils/api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  const handleClosePopup = useCallback(() => {
    setPopup(null);
  }, []); //Se vuelve a crear esta función solo si alguna de sus dependencias cambia (en este caso, ninguna)

  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdateUser = (data) => {
    api.updateUserInfo(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    });
  };

  const handleUpdateAvatar = (data) => {
    api.updateAvatar(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    });
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

  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le has dado like
    const isLiked = card.isLiked;
    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  function handleCardDelete(id) {
    // Envía una solicitud a la API y excluye la tarjeta eliminada
    api
      .deleteCard(id)
      .then(() => {
        setCards((cards) =>
          cards.filter((currentCard) => currentCard._id !== id)
        );
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }

  function handleAddPlaceSubmit(data) {
    // Envía una solicitud a la API y agrega la nueva tarjeta al principio de la lista
    api
      .createCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          handleUpdateAvatar,
        }}
      >
        <div className="page">
          <Header></Header>
          <Main
            popup={popup}
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          ></Main>
          <Footer></Footer>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
