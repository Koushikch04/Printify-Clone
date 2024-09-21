import React, { lazy } from "react";
import "./Products.css";
import Product from "./products.png";
import Triangle from "./Triangle";

const Products = () => {
  return (
    <div className="products">
      <div className="top-triangle">
        <Triangle direction="down" />
      </div>
      <div className="product-wrapper">
        <div className="product-description">
          {/* <img src="" alt="Product preview" className="preview-image" /> */}
          <img src={Product} alt="Product preview" className="preview-image" />
          <div className="product-details">
            <h2>Easily add your design to a wide range of products</h2>
            <p>
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <a href="/products" className="cta-link">
              All products &rarr;
            </a>
          </div>
        </div>
        <div className="features-section">
          <div className="feature">
            <img
              src="https://printify.com/pfh/assets/legacy/custom-products.png"
              loading={lazy}
              style={{
                width: "156px",
                height: "156px",
              }}
              alt="Create"
              className="feature-icon"
            />
            <h6>CREATE</h6>
            <h4>custom products</h4>
            <p>Easily upload your designs using our free tools.</p>
          </div>
          <div className="feature">
            <img
              src="https://printify.com/pfh/assets/legacy/your-products.png"
              loading={lazy}
              style={{
                width: "156px",
                height: "156px",
              }}
              alt="Create"
              className="feature-icon"
            />
            <h6>SELL</h6>
            <h4>on your terms</h4>
            <p>Set prices, choose products, and sell the way you want.</p>
          </div>
          <div className="feature">
            <img
              src="https://printify.com/pfh/assets/legacy/fullfillment.png"
              loading={lazy}
              style={{
                width: "156px",
                height: "156px",
              }}
              alt="Create"
              className="feature-icon"
            />
            <h6>WE HANDLE</h6>
            <h4> fulfillment</h4>
            <p>We take care of the printing and logistics.</p>
          </div>
        </div>
      </div>
      <div className="bottom-triangle">
        <Triangle color={"#f7f7f7"} direction="down" />
      </div>
    </div>
  );
};

export default Products;
