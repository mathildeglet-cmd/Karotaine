import style from "./recettePage.module.css";
import { useLoaderData } from "react-router-dom";
import type { MealDataType } from "../../lib/definitions";
import { MealCard } from "../../components/MealCard/MealCard";

export default function RecettePage() {
  const dataRecipe = useLoaderData();
  const data : MealDataType []= dataRecipe.meals;

  return (
    <>
      {data.map((m) => (
        
          <MealCard key={m.idMeal} data ={m}/>
        
      ))}

    
    </>
  );
}


