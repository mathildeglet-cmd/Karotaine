import { Link, useLoaderData } from "react-router-dom";
import style from "./Home.module.css";
import heroBanner from "../../../public/heroBanner.jpg";
import OriginalCarrot from "../../assets/images/OriginalCarrot.png";
import FlatteredCarrot from "../../assets/images/FlatteredCarrot.png";
import AngryCarrot from "../../assets/images/AngryCarrot.png";
import AutoPlay from "../../components/slider/AutoPlay";

function Home() {
  const dataRecepe = useLoaderData();
  const data = dataRecepe.meals;
  return (
    <div className={style.HomePage}>
      <div className={style.HeroBanner}>
        <img src={heroBanner} alt="Carrot Field Hero Banner" />
        <div className={style.BannerText}>
          <h1>KAROTAINE</h1>
          <h2>Spread kindness</h2>
        </div>
      </div>

      <div className={style.PlaceholderImages}>
        <span className={style.riseShake}>
          <img src={OriginalCarrot} alt="Original Carrot" />
          <img src={FlatteredCarrot} alt="Flattered Carrot" />
          <img src={AngryCarrot} alt="Angry Carrot" />
        </span>
      </div>

      <button type="button" className={style.styled}>
        <Link to="/recipe">Don't forget to eat your veggies!</Link>
      </button>

      <div className={style.VeggieReminder}>
        <h2>Don't forget to eat your veggies!</h2>
        <ul>
          <li>5 carrots a day</li>
          <li>5 carrots a day</li>
          <li>5 carrots a day</li>
        </ul>
      </div>
      <div>
        <AutoPlay data={data} />
      </div>
    </div>
  );
}

export default Home;
