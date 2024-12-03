import style from "./recettePage.module.css";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Filtre from "../../components/Filtre/Filtre";

function Recipe() {
  const dataRecipe = useLoaderData();
  const data = dataRecipe.meals;

  const [query, setQuery] = useState("");
  const filterIngredient = data.filter(
    (d) =>
      d.strIngredient1.toLowerCase().includes(query.toLowerCase()) ||
      d.strIngredient2.toLowerCase().includes(query.toLowerCase()) ||
      d.strIngredient3.toLowerCase().includes(query.toLowerCase()) ||
      d.strIngredient4.toLowerCase().includes(query.toLowerCase()) ||
      d.strIngredient5.toLowerCase().includes(query.toLowerCase()) ||
      d.strIngredient6.toLowerCase().includes(query.toLowerCase()) ||
      d.strIngredient7.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <Filtre query={query} setQuery={setQuery} />
      {filterIngredient.map((m) => (
        <h1 key={m.idMeal} className={style.h1}>
          {m.strIngredient3}
        </h1>
      ))}
    </>
  );
}

export default Recipe;
