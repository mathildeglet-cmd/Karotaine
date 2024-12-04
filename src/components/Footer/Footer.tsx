import icon from "../../assets/images/icon.png";
import style from "./Footer.module.css";

function Footer() {
  return (
    <section>
      <footer>
        <div className={style.container_icon}>
          <a href="_">
            <img src={icon} alt="icone twitter" className={style.social_icon} />
          </a>
        </div>
        <p className={style.creators}>KAROTAINE @2024</p>
      </footer>
    </section>
  );
}

export default Footer;
