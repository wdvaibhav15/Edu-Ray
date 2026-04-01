import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our Cutting-edge curriculam is degined to empower students with the
          knowledge , skills and experiences needed to excel in the dynamic
          fielfs of education and career.
        </p>
        <button className="btn">Learn Moreimg <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
