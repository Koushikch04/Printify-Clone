import React from "react";
import "./Financials.css";
import icon from "./Financials.svg";
function Financials() {
  return (
    <div className="financials">
      <div className="financials-wrapper">
        <div className="financials-description">
          <div className="financials-description-wrapper">
            <h2 className="financials-title">Make Money, Risk-Free</h2>
            <h2 className="financials-title-2">
              You pay for fulfillment only when you make a sale
            </h2>
            <div className="financials_explanation_table">
              <div className="financials_explanation_table_row">
                <p>You sell a t-shirt</p>
                <p>$ 30</p>
              </div>
              <div className="financials_explanation_table_row">
                <p>You pay for its production</p>
                <p>$ 12</p>
              </div>
              <hr style={{ margin: "20px 0", border: "1px solid #ccc" }} />{" "}
              <div className="financial_explanation_summary">
                <h5>Your Profit</h5>
                <h5>$18</h5>
              </div>
            </div>
            <a className="primary_selling">Start Selling</a>
            <p className="financial_selling_benefits">
              100% Free to use · 900+ Products · Largest print network
            </p>
          </div>
        </div>
        <div className="financials-image">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Financials;
