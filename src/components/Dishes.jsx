import React from "react";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/img7.png";
import img8 from "../assets/img/img8.png";
import img9 from "../assets/img/img9.png";
import img10 from "../assets/img/img10.png";
import img11 from "../assets/img/img11.png";
import img12 from "../assets/img/img12.png";
import './Dishes.css'







import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-5xl font-semibold text-center pt-24 pb-10 Menu-font">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Butter Chicken" price="$100" />
        <DishesCard img={img2} title="Chicken Biryani" price="$200" />
        <DishesCard img={img3} title="Mutton Curry" price="$120" />
        <DishesCard img={img4} title="Fish Fry" price="$100" />
        <DishesCard img={img5} title="Mtton Biryani" price="$250" />
        <DishesCard img={img6} title="Chicken Lollipop" price="$160" />
        <DishesCard img={img7} title="Manchuria" price="$60" />
        <DishesCard img={img8} title="Noodles" price="$60" />
        <DishesCard img={img9} title="Panner Butter Masala" price="$150" />
        <DishesCard img={img10} title="Veg FriedRice" price="$60" />
        <DishesCard img={img11} title="veg Pasta" price="$100" />
        <DishesCard img={img12} title="Egg FriedRIce" price="$60" />




      </div>
    </div>
  );
};

export default Dishes;