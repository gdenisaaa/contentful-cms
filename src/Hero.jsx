import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id fugit
            vitae hic expedita, quod ipsum? Vel praesentium, voluptates unde
            fuga eaque officia. Nobis eveniet totam labore dolores assumenda
            exercitationem tempora?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
