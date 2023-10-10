import React from "react";
import LandingSection from "src/components/landing-section/landing-section";
import FeaturedProducts from "src/components/featured-products/featured-products";
import FeaturedTutorials from "src/components/featured-tutorials/featured-tutorials";

const Home = () => {
  return (
    <>
      <LandingSection />
      <FeaturedTutorials />
      <FeaturedProducts />
    </>
  );
};

export default React.memo(Home);
