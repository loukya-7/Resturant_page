import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        Celebrate your special moments with us. Our team is ready to tailor events and catering services to your unique preferences, 
        ensuring that your special occasions are truly memorable.
        </p>
        <p>
        We take pride in being a part of the community. Flavor Fiestais not just a place to eat.it's a hub for connecting with friends, family, and neighbors. 
        Join us in creating lasting memories and fostering a sense of community.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;