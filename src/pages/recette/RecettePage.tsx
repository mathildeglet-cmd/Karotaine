import { Navigate, useLoaderData } from "react-router-dom";
import type { MealDataType } from "../../lib/definitions";
import { MealCard } from "../../components/MealCard/MealCard";
import { useState } from "react";
import Filtre from "../../components/Filtre/Filtre";

function Recipe() {
  const dataRecipe = useLoaderData();
  const data: MealDataType[] = dataRecipe.meals;
  const [submitValue, setSubmitValue] = useState("");
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
  // const carrotError = query !== "carrot" ? <Navigate to =" /" :
  console.log(query);
  return (
    <>
      <Filtre
        data={data}
        query={query}
        setQuery={setQuery}
        submitValue={submitValue}
        setSubmitValue={setSubmitValue}
      />
      {filterIngredient.map((m) => (
        <MealCard key={m.idMeal} data={m} />
      ))}
    </>
  );
}

export default Recipe;
