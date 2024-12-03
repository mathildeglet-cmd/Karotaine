import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../../assets/images/menu.png";
import style from "./NavBar.module.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className={style.navbar}>
        <div className={style.navbarHeader}>
          <button
            className={style.burgerMenu}
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <img src={menuIcon} alt="Menu burger" className={style.menuIcon} />
          </button>
        </div>
        <ul className={`${style.navbarLinks} ${isMenuOpen ? style.open : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/recipe" onClick={() => setIsMenuOpen(false)}>
              Recipe
            </Link>
          </li>

          <li>
            <Link to="/contact/123" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
