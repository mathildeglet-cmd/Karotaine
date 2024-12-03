import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
import menuIcon from "../../assets/images/menu.png";
import style from "./NavBar.module.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* {location.pathname === "/" && (
        <img
          className="logo"
          src={logo}
          alt="une terre avec un pins rouge au couleur de notre charte"
        />
      )} */}
      <nav className="navbar">
        <div className={style.navbarHeader}>
          <button
            className="burger-menu"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src={menuIcon} alt="Menu burger" className="menu-icon" />
          </button>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact/123" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/projet" onClick={() => setIsMenuOpen(false)}>
              Projet
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
