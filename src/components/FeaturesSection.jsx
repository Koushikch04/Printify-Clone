// components/FeaturesSection.js
import React from "react";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <section className="features">
      <div className="feature">
        <img
          _ngcontent-ng-c3056078229=""
          width="120"
          height="120"
          ngsrc="https://printify.com/pfh/assets/legacy/higher-profits.svg"
          alt=""
          class="feature__icon"
          loading="lazy"
          fetchpriority="auto"
          ng-img="true"
          src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
        />
        <h4>Higher Profits</h4>
        <div className="feature_description">
          <p>
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>
      </div>
      <div className="feature">
        <img
          _ngcontent-ng-c3056078229=""
          width="120"
          height="120"
          ngsrc="/pfh/assets/legacy/robust-scaling.svg"
          alt=""
          class="feature__icon"
          loading="lazy"
          fetchpriority="auto"
          ng-img="true"
          src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
        />
        <h4>Robust Scaling</h4>
        <div className="feature_description">
          <p>
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
      </div>
      <div className="feature">
        <img
          _ngcontent-ng-c3056078229=""
          width="120"
          height="120"
          ngsrc="/pfh/assets/legacy/best-selection.svg"
          alt=""
          class="feature__icon"
          loading="lazy"
          fetchpriority="auto"
          ng-img="true"
          src="https://printify.com/pfh/assets/legacy/best-selection.svg"
        />
        <h4>Best Selection</h4>
        <div className="feature_description">
          <p>
            With 900+ products and top quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
