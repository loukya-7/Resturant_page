import React from "react";
import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/menu1.png";
import menu2 from "../assets/img/menu2.png";
import menu3 from "../assets/img/menu3.png";
import menu4 from "../assets/img/menu4.png";
import menu5 from "../assets/img/menu5.png";
import menu6 from "../assets/img/menu6.png";
import './Menu.css';




const Menu = () => {
  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-5xl font-semibold text-center lg:pt-8 pt-24 pb-10 Menu-font">
        Premium Menu
      </h1>
      
     
  

      <div className=" flex flex-wrap gap-8 justify-center mt-8">
        <DishesCard img={menu1} title="Panner Tikka" price="$150"/>
        <DishesCard img={menu2} title="Veg momos" price="$150" />
        <DishesCard img={menu3} title="Potato Tikki" price="$60" />
        <DishesCard img={menu4} title="Chicken Soup" price="$100" />
        <DishesCard img={menu5} title="Mexican Rice" price="$150" />
        <DishesCard img={menu6} title="Veg Soup" price="$100" />



      </div>
    </div>
  );
};

export default Menu;