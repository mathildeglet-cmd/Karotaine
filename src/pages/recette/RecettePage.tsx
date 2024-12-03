import style from "./recettePage.module.css";
import { data, useLoaderData } from "react-router-dom";
import Filtre from "../../components/Filtre/Filtre";

function About() {
  const dataRecipe = useLoaderData();
  const data=dataRecipe.meals;
  console.log(dataRecipe);
  return (
    <>
      <Filtre 
      data= {data}/>
      {dataRecipe.meals.map((m) => (
        <h1 key={m.idMeal} className={style.h1}>
          {m.strMeal}
        </h1>
      ))}
    </>
  );
}

export default About;
