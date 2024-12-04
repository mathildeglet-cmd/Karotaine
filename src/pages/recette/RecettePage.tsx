import { useLoaderData, Navigate } from "react-router-dom";
import type { MealDataType } from "../../lib/definitions";
import { MealCard } from "../../components/MealCard/MealCard";
import { useState } from "react";
import Filtre from "../../components/Filtre/Filtre";
import style from "./recettePage.module.css";
import AutoPlay from "../../components/slider/AutoPlay";

function Recipe() {
  const dataRecipe = useLoaderData();
  const data: MealDataType[] = dataRecipe.meals;

  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const handleFilter = () => {
    return data.filter((meal) =>
      Object.values(meal).join(" ").toLowerCase().includes("carrot"),
    );
  };

  const handleSubmit = () => {
    if (query.toLowerCase() !== "carrot") {
      setShowPrompt(true);
    } else {
      setSubmittedQuery(query);
      setShowPrompt(false);
    }
  };

  const filteredData = submittedQuery ? handleFilter() : [];

  if (showPrompt) {
    alert("You didn't type carrot!");
    setShowPrompt(false);
  }

  return (
    <>
      <section className={style.recettePage}>
        <Filtre query={query} setQuery={setQuery} onSubmit={handleSubmit} />
        <section className={style.displayCards}>
          {submittedQuery.toLowerCase() === "carrot" && filteredData.length > 0
            ? filteredData.map((meal) => (
                <MealCard key={meal.idMeal} data={meal} />
              ))
            : submittedQuery && <p>No carrot recipes found!</p>}
        </section>
        <div>
          <AutoPlay data={data} />
        </div>
      </section>
    </>
  );
}

export default Recipe;
