import type { MealDataType } from "../../lib/definitions";
import style from "./MealCard.module.css";


export function MealCard({ data }: { data: MealDataType }) {
  return (
    <section className={style.cards}>
      <section className={style.card}>
      <p className={style.mealName}>{data.strMeal}</p>
      <img className={style.picture} src={data.strMealThumb} alt="a meal" />
      <p className={style.category}>{data.strCategory}</p>
      <p className={style.ingredient}>{data.strIngredient1}</p>
      </section>
    </section>
  );
}
