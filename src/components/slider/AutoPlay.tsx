import Slider from "react-slick";
import type { MealDataType } from "../../lib/definitions";
import style from "./autoPlay.module.css";
import logo from "../../assets/images/Carrot.png";

export default function AutoPlay({ data }: { data: MealDataType }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className={style.slider}>
      <Slider {...settings}>
        <img src={data.strMealThumb} alt="recette" />
      </Slider>
    </div>
  );
}
