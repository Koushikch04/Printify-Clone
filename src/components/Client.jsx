import React, { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Client.css";

const Stars = () => {
  return (
    <div className="social_proof_stars">
      <div className="star">
        <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
        <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
        <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
        <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
        <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
      </div>
    </div>
  );
};

const Client = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      loop: true,
      modules: [Navigation, Pagination],
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: true,
    });
  }, []);

  return (
    <section className="section__container client__container" id="client">
      <div className="client__swiper">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="client__card">
                <p>
                  Printify has been an incredible service for us musicians
                  unable to keep large amount of inventory - now we can create
                  designs previously too expensive to print without having to
                  have 1,000 shirts in our jam space. Thanks Printify!{" "}
                </p>
                <img
                  src="https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png"
                  alt="client"
                />
                <h4>Robert A. Voltaire</h4>
                <Stars />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <p>
                  We chose Printify because of their offerings as well as their
                  incredibly low prices. After several years, we've come to find
                  that their customer service is also top notch, and their
                  platform just keeps getting better and better.
                </p>
                <img
                  src="https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png"
                  alt="client"
                />
                <h4>Quinten Barney</h4>
                <h5>Etsy Merchant</h5>
                <Stars />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <p>
                  Printify has been a amazing partner to work with as we grow
                  our business, from the range of merch we can make for our
                  customers to working with our Customer Service team (Hi
                  Martin!) it's truly made the whole process a breeze.{" "}
                </p>
                <img
                  src="https://printify.com/pfh/media/nikki-TJP4NANB.png"
                  alt="client"
                />
                <h4>Nikki</h4>
                <h5>Store link</h5>
                <Stars />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="client__card">
                <p>
                  Using Printify has been a great experience. Customer service
                  is always very quick to respond and handle any issues that our
                  customers may have. The premium account has more than paid for
                  itself and has increased our margins significantly.{" "}
                </p>
                <img
                  src="https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png"
                  alt="client"
                />
                <h4>Spencer, Brett, and Kyle</h4>
                <h5>Store link</h5>
                <Stars />
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Client;
