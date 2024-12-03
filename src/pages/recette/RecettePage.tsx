import style from "./recettePage.module.css";
import { useLoaderData } from "react-router-dom";

function Recipe() {
  const dataRecipe = useLoaderData();
  console.log(dataRecipe);
  return (
    <>
      {dataRecipe.meals.map((m) => (
        <h1 key={m.idMeal} className={style.h1}>
          {m.strMeal}
        </h1>
      ))}
    </>
  );
}

export default Recipe;
