import { Link } from "react-router-dom";
import style from "./Home.module.css";

import OriginalCarrot from "../../assets/images/OriginalCarrot.png";
import FlatteredCarrot from "../../assets/images/FlatteredCarrot.png";
import AngryCarrot from "../../assets/images/AngryCarrot.png";

function Home() {
  return (
    <div className={style.HomePage}>
      <div className={style.HomeTitle}>
        <h1>Home Page</h1>
        <div className={style.PlaceholderImages}>
          <span className={style.riseShake}>
            <img src={OriginalCarrot} alt="Original Carrot" />
            <img src={FlatteredCarrot} alt="Flattered Carrot" />
            <img src={AngryCarrot} alt="Angry Carrot" />
          </span>
        </div>
      </div>
      <button type="button" className={style.styled}>
        <Link to="/recipe">Don't forget to eat your veggies !</Link>
      </button>

      <div className={style.VeggieReminder}>
        <h2>Don't forget to eat your veggies!</h2>
        <ul>
          <li>5 carrots a day</li>
          <li>5 carrots a day</li>
          <li>5 carrots a day</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Home;
