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

  return (
    <>
      <CurrentUserContext.Provider
        value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
      >
        <div className="page">
          <Header></Header>
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
          ></Main>
          <Footer></Footer>
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
