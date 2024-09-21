// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Platform from "./components/Platform";
import SocialProof from "./components/SocialProof";
import Financials from "./components/Financials";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <Products />
      <Platform />
      <SocialProof />
      <Financials />
      <Footer />
    </div>
  );
}

export default App;
