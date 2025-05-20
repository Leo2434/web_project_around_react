import headerLogo from "../../images/Lead.svg";
import "../../blocks/header.css";

function Header() {
  return (
    <header className="header">
      <img
        src={headerLogo}
        alt="Encabezado de la Galería"
        className="header__logo"
      />
      <hr className="header__line" />
    </header>
  );
}

export default Header;
