import Slider from "react-slick";
import type { MealDataType } from "../../lib/definitions";
import style from "./autoPlay.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AutoPlay({ data }: { data: MealDataType[] }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };

  return (
    <div className={style.container}>
      <Slider {...settings}>
        {data.map((m) => (
          <div key={m.strMeal}>
            <div key={m.idMeal} className={style.slide}>
              <img
                className={style.photoCarousel}
                src={m.strMealThumb}
                alt={m.strMeal}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
