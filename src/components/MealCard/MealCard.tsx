import type { MealDataType } from "../../lib/definitions";
import style from "./MealCard.module.css";
import { useState } from "react";

type isOpenDetailsType = {
  isOpenDetails: boolean;
  setIsOpenDetails: (b: boolean) => void;
};

export function MealCard({ data, count, setCount, isClicked, setIsClicked}: { data: MealDataType, count:number, setCount: (c:number)=> void, isClicked:boolean, setIsClicked:(c:boolean)=>void}) {
  const [isOpenDetails, setIsOpenDetails] = useState<
    boolean | (() => isOpenDetailsType)
  >(false);


  const handleIsOpenDetails = () => {
    setIsOpenDetails(!isOpenDetails);
    
  };


  const handleCounter = () => {
    setCount(count + 1);
    setIsClicked(!isClicked);
  };


  return (
    <>

      <button type="button" onClick={handleIsOpenDetails}>
        <section className={style.cards}>
          {!isOpenDetails && (
            <section>
              <h2 className={style.mealName}>{data.strMeal}</h2>
              <img
                className={style.picture}
                src={data.strMealThumb}
                alt="a meal"
              />
            </section>
          )}
          {isOpenDetails && (
            <section className={style.versoCard}>
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
          )}
        </section>
        <button
          type="button"
          className={style.eatButton}
          onClick={handleCounter}
        >
          EAT
        </button>
      </button>
    </>
  );
}
