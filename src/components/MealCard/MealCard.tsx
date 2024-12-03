import type { MealDataType } from "../../lib/definitions";
import style from "./MealCard.module.css";

export function MealCard({ data }: { data: MealDataType }) {
  return (
    <section className={style.cardsection}>
      <span>{data.strMeal}</span>
      <img
        className={style.picture}
        src="https://picsum.photos/200"
        alt="a meal"
      />
      <div className={style.category}>{data.strCategory}</div>
      <div className={style.ingredient}>
        {data.strIngredient1}
        {data.strIngredient2}
        {data.strIngredient3}
      </div>
    </section>
  );
}
