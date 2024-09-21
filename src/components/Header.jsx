import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [dropdown, setDropdown] = useState({
    howItWorks: false,
    services: false,
    useCases: false,
    needHelp: false,
  });

  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const getArrowDirection = (menu) => {
    return hoveredMenu === menu || dropdown[menu] ? "up" : "down";
  };

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img
            height={"50px"}
            width={"135px"}
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt=""
          />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Catalog</a>
            </li>
            <li
              onMouseEnter={() => setHoveredMenu("howItWorks")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a
                href="#how-it-works"
                onClick={() => toggleDropdown("howItWorks")}
              >
                How it works
                <span className={`arrow ${getArrowDirection("howItWorks")}`}>
                  ▼
                </span>
              </a>
              {dropdown.howItWorks && (
                <ul className="dropdown">
                  <li>
                    <a href="#step1">How Printify Works</a>
                  </li>
                  <li>
                    <a href="#step2">Print On Demand</a>
                  </li>
                  <li>
                    <a href="#step3">Printify Quality Promise</a>
                  </li>
                  <li>
                    <a href="#step4">What to Sell?</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li
              onMouseEnter={() => setHoveredMenu("services")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a href="#services" onClick={() => toggleDropdown("services")}>
                Services
                <span className={`arrow ${getArrowDirection("services")}`}>
                  ▼
                </span>
              </a>
              {dropdown.services && (
                <ul className="dropdown">
                  <li>
                    <a href="#service1">Printify Studio</a>
                  </li>
                  <li>
                    <a href="#service2">Printify Express Delivery</a>
                  </li>
                  <li>
                    <a href="#service3">Transfer Products</a>
                  </li>
                  <li>
                    <a href="#service4">Order In Bulk</a>
                  </li>
                  <li>
                    <a href="#service5">Experts Program</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setHoveredMenu("useCases")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a href="#use-cases" onClick={() => toggleDropdown("useCases")}>
                Use-cases
                <span className={`arrow ${getArrowDirection("useCases")}`}>
                  ▼
                </span>
              </a>
              {dropdown.useCases && (
                <ul className="dropdown">
                  <li>
                    <a href="#case1">Merch for Fans</a>
                  </li>
                  <li>
                    <a href="#case2">Merch for eCommerce</a>
                  </li>
                  <li>
                    <a href="#case3">Merch for Enterprises</a>
                  </li>
                  <li>
                    <a href="#case4">Grow Your Store</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setHoveredMenu("needHelp")}
              onMouseLeave={() => setHoveredMenu(null)}
            >
              <a href="#need-help" onClick={() => toggleDropdown("needHelp")}>
                Need help?
                <span className={`arrow ${getArrowDirection("needHelp")}`}>
                  ▼
                </span>
              </a>
              {dropdown.needHelp && (
                <ul className="dropdown">
                  <li>
                    <a href="#faq">Help Center</a>
                  </li>
                  <li>
                    <a href="#support">Contacts</a>
                  </li>
                  <li>
                    <a href="#my-requests">My Requests</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
        <div className="buttons">
          <button className="login">
            <a href="#contact">Log in</a>
          </button>
          <button className="signup">
            <a href="#contact">Sign Up</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
