import React from "react";
import "./HeroSection.css";
import icon from "./image.svg";
import background from "./hero_section_background.svg";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Create and Sell Custom Products</h1>
        <ul>
          <li>100% free to use</li>
          <li>900+ high-quality products</li>
          <li>and a global print network.</li>
        </ul>
        <div className="hero_navigation">
          <button className="hero-cta">Start for free</button>
          <button className="hero-how">How it works?</button>
          <p className="info">Trusted By Over 8M sellers around the world</p>
        </div>
      </div>
      <div className="hero-image">
        <img
          className="background"
          src={background}
          alt="Background"
          style={{
            // width: "100%",
            height: "500px",
            objectFit: "cover",
            // position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        />
        <div className="icon-background">
          <img src={icon} alt="Description of icon" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
