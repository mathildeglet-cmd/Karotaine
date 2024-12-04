import { Link, useLoaderData } from "react-router-dom";
import style from "./Home.module.css";
import heroBanner from "../../assets/heroBanner.jpg";
import AutoPlay from "../../components/slider/AutoPlay";
import CarrotBoy from "../../../public/CarrotBoy.png";

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
          <img src={CarrotBoy} alt="Original Carrot" />
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
      <a href="/conseil" target="_blank" rel="noreferrer">
        <img className={style.hide} src={CarrotBoy} alt="Original Carrot" />
      </a>
    </div>
  );
}

export default Home;
