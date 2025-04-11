import React from "react";

//Home Component Imports
import PortfolioHero from "../components/portfolio/portfolioHero";
import PortfolioDetails from "../components/portfolio/portfolioDetails";

const Portfolio = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PortfolioHero />
      <PortfolioDetails />
    </div>
  );
};

export default Portfolio;
