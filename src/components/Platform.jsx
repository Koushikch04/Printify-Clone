import React from "react";
import "./Platform.css";

// Platform data with their respective top/left/right positions.
const platforms = [
  {
    name: "BigCommerce",
    logo: "https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg",
    link: "https://www.bigcommerce.com/",
    top: "10%",
    left: "15%",
    itemSize: 80,
  },
  {
    name: "Squarespace",
    logo: "https://printify.com/pfh/media/squarespace-FIBF2RIF.svg",
    link: "https://www.squarespace.com/",
    top: "10%",
    left: "70%",
    itemSize: 107,
  },
  {
    name: "Wix",
    logo: "https://printify.com/pfh/media/wix-MWZCZDTE.svg",
    link: "https://www.wix.com/",
    top: "15%",
    right: "-15%",
    itemSize: 107,
  },
  {
    name: "PrestaShop",
    logo: "https://printify.com/pfh/media/presta-54F6AYUU.svg",
    link: "https://www.prestashop.com/",
    top: "40%",
    left: "10%",
    itemSize: 107,
  },
  {
    name: "WooCommerce",
    logo: "https://printify.com/pfh/media/woo-PGFAG65X.svg",
    link: "https://woocommerce.com/",
    top: "40%",
    left: "90%",
    itemSize: 80,
  },
  {
    name: "Etsy",
    logo: "https://printify.com/pfh/media/etsy-MXXFYORZ.svg",
    link: "https://www.etsy.com/",
    top: "60%",
    right: "-30%",
    itemSize: 170,
  },
  {
    name: "API",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Web_API.svg",
    link: "#",
    top: "70%",
    left: "-20%",
    itemSize: 165,
  },
  {
    name: "Shopify",
    logo: "https://printify.com/pfh/media/shopify-3NAPXPBF.svg",
    link: "https://www.shopify.com/",
    top: "80%",
    left: "60%",
    itemSize: 155,
  },
  {
    name: "And More",
    logo: "https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg",
    link: "#",
    top: "90%",
    left: "30%",
    itemSize: 80,
  },
];

// Utility function to calculate pixel value from percentage
const getPixelValue = (value, containerSize) => {
  if (value.endsWith("%")) {
    return (parseFloat(value) / 100) * containerSize;
  }
  return parseFloat(value);
};

// Function to calculate platform position based on top/left/right
const calculateCoordinates = (top, left, right, containerSize) => {
  const topPx = getPixelValue(top, containerSize);
  let xPx;
  if (left !== undefined) {
    xPx = getPixelValue(left, containerSize);
  } else if (right !== undefined) {
    xPx = containerSize - getPixelValue(right, containerSize);
  }
  return { x: xPx, y: topPx };
};

const Platform = () => {
  const containerSize = 600;
  const center = containerSize / 2;

  return (
    <div className="platform-wrapper">
      <div className="text">
        <h1>Connect your store</h1>
        <p>
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </p>
      </div>
      <div className="platform-container">
        <button className="printify-button">Printify</button>
        <svg className="curved-lines" width="100%" height="100%">
          {platforms.map((platform, index) => {
            const { top, left, right } = platform;
            const { x, y } = calculateCoordinates(
              top,
              left,
              right,
              containerSize
            );

            // Adjust control point to create a proper curve
            const controlX = (center + x) / 2;
            const controlY = (center + y) / 2;

            return (
              <path
                key={index}
                d={`M${center},${center} Q${controlX},${controlY} ${x + 50},${
                  y + 50
                }`}
                stroke="#e0e0e0"
                fill="transparent"
                style={{ zIndex: 0 }}
              />
            );
          })}
        </svg>
        <div className="platform-logos">
          {platforms.map((platform, index) => {
            const itemSize = platform.itemSize;
            return (
              <a
                href={platform.link}
                key={index}
                className={`integration-item item-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  top: platform.top,
                  left: platform.left,
                  right: platform.right,
                  width: itemSize,
                  height: itemSize,
                  zIndex: 1, // Ensure this is above the SVG
                }}
              >
                {platform.name == "API" && <p>API</p>}
                {platform.name !== "API" && (
                  <img
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    style={{
                      width: itemSize * 0.75, // Scale image to fit
                      height: itemSize * 0.75,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Platform;
