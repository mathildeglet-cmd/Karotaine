import style from "./Home.module.css";
import { MealCard } from "../../components/MealCard";

function Home() {
  return (
    <>
    <div>
      <h1 className={style.h1title}>Home</h1>
      <button className="favorite styled" type="button">
        click here
      </button>
    </div>

    <MealCard/>
    </>
  );
}

export default Home;
