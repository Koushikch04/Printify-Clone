import React from "react";
import "./SocialProof.css";
import Client from "./Client";
function SocialProof() {
  return (
    <div className="social-proof">
      <div className="social-proof-wrapper">
        <div className="social-proof_description">
          <div className="social-proof_title">
            <h2>Trusted by over 8M sellers around the world</h2>
          </div>
          <div className="social-proof_text">
            <p>
              Whether you are just getting started or run an enterprise-level
              e-commerce business, we do everything we can to ensure a positive
              merchant experience.
            </p>
          </div>
        </div>
        <div className="swiper-container">
          <Client />
        </div>
      </div>
    </div>
  );
}

export default SocialProof;
