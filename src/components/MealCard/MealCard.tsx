import type { MealDataType } from "../../lib/definitions";
import style from "./MealCard.module.css";

export function MealCard({ data }: { data: MealDataType }) {
  return (
    <section className={style.cards}>
      <h2 className={style.mealName}>{data.strMeal}</h2>
      <img className={style.picture} src={data.strMealThumb} alt="a meal" />
      <h2 className={style.h2ingredient}>Ingredients : </h2>
      <ul className={style.listIngredient}>
        <li className={style.ingredient}>{data.strIngredient1}</li>
        <li className={style.ingredient}>{data.strIngredient2}</li>
        <li className={style.ingredient}>{data.strIngredient3}</li>
        <li className={style.ingredient}>{data.strIngredient4}</li>
        <li className={style.ingredient}>{data.strIngredient5}</li>
        <li className={style.ingredient}>{data.strIngredient6}</li>
      </ul>
    </section>
  );
}
