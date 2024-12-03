import style from "./recettePage.module.css";
import { data, useLoaderData } from "react-router-dom";
import type { MealDataType } from "../../lib/definitions";
import { MealCard } from "../../components/MealCard/MealCard";
import Filtre from "../../components/Filtre/Filtre";

function Recipe() {
  const dataRecipe = useLoaderData();
  const data: MealDataType[] = dataRecipe.meals;
  console.log(data);

  return (
    <>
      <Filtre data={data} />
      {data.map((m) => (
        <MealCard key={m.idMeal} data={m} />
      ))}
    </>
  );
}

export default Recipe;
