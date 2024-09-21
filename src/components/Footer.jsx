import React from "react";
import "./Footer.css";
const integrations = [
  "Shopify",
  "Etsy",
  "eBay",
  "Amazon",
  "TikTok Shop",
  "PrestaShop",
  "BigCommerce",
  "Wix",
  "WooCommerce",
  "Squarespace",
  "Printify API",
  "Printify Pop-Up Store",
  "Shutterstock",
];
const discoverLinks = [
  "Discover",
  "Blog",
  "Guides",
  "Products",
  "Etsy print-on-demand",
  "Shopify print-on-demand",
  "Woocommerce print-on-demand",
  "Wix print-on-demand",
  "Squarespace print-on-demand",
  "Make Your Own Shirt",
  "Brands",
  "Pricing",
  "Shipping Rates",
  "Mockup Generator",
];

const startSellingLinks = [
  "Start selling",
  "Custom T-shirts",
  "Custom Hoodies",
  "Custom Mugs",
  "Custom Socks",
  "Custom Backpacks",
  "Custom Branding",
  "Sell on Etsy",
  "Sell on Social Media",
  "Free T-shirt Designs",
  "Custom Products",
  "Custom All-Over-Print Hoodies",
  "Start a Clothing Line",
  "Start POD Business",
  "Bulk Orders",
  "Transfering To Printify",
];
const printifyLinks = [
  "Print on Demand",
  "Print Providers",
  "Experts Program",
  "Printify Express Delivery",
  "Become a Partner",
  "About",
  "Printify Quality Promise",
  "Jobs",
  "Webinars",
  "Printing Profits Podcast",
  "Contact Us",
  "Affiliate",
  "Contact Sales",
  "POD Glossary",
  "Network Fulfillment Status",
  "Merchant Protection",
  "Security",
  "Sitemap",
];

const Footer = () => (
  <footer className="footer" id="contact">
    <div className="footer-wrapper">
      <div className="footer__logo">
        <div className="logo footer__logo">
          <a href="#">
            <img
              src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
              height={"50px"}
              width={"135px"}
              alt=""
            />
          </a>
          <div className="social-links">
            <img
              height={"32px"}
              width={"32px"}
              style={{ margin: "5px" }}
              src="https://printify.com/wp-content/uploads/2019/07/facebook-icon.svg"
              alt=""
            />
            <img
              height={"32px"}
              width={"32px"}
              style={{ margin: "5px" }}
              src="https://printify.com/wp-content/uploads/2019/01/instagram-icon.svg"
              alt=""
            />
            <img
              height={"32px"}
              width={"32px"}
              style={{ margin: "5px" }}
              src="https://printify.com/wp-content/uploads/2019/01/linkedin-icon.svg"
              alt=""
            />
            <img
              height={"32px"}
              width={"32px"}
              style={{ margin: "5px" }}
              src="https://printify.com/wp-content/uploads/2023/09/X-Logo-Green.svg"
              alt=""
            />
            <img
              height={"32px"}
              width={"32px"}
              style={{ margin: "5px" }}
              src="https://printify.com/wp-content/uploads/2019/01/youtube-icon.svg"
              alt=""
            />
            <img
              height={"32px"}
              width={"32px"}
              style={{ margin: "5px" }}
              src="https://printify.com/wp-content/uploads/2023/02/Tiktok-1.svg"
              alt=""
            />
            <img
              height={"32px"}
              width={"32px"}
              style={{ margin: "5px" }}
              src="https://printify.com/wp-content/uploads/2019/01/reddit-icon.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>Integrations</h4>
          <ul className="footer__links">
            {integrations.map((integration, index) => (
              <li key={index}>
                <a href="#">{integration}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Information</h4>
          <ul className="footer__links">
            {discoverLinks.map((integration, index) => (
              <li key={index}>
                <a href="#">{integration}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Start selling</h4>
          <ul className="footer__links">
            {startSellingLinks.map((integration, index) => (
              <li key={index}>
                <a href="#">{integration}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__col">
          <h4>Printify</h4>
          <ul className="footer__links">
            {startSellingLinks.map((integration, index) => (
              <li key={index}>
                <a href="#">{integration}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="footer__bar">
      <div className="site_info_links">
        <a href="">Intellectual Property Policy</a>
        <a href="">Terms of Service</a>
        <a href="">Privacy Policy</a>
        <a href="">Security</a>
      </div>
      <p>© 2024 Printify, Inc. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
