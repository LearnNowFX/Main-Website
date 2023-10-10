import React from "react";
import Carousel from "src/components/carousel/carousel";
import { MOCK_FEATURED_ITEMS } from "src/mock/featured.mock";

const Home = () => {
  return (
    <>
      <Carousel items={MOCK_FEATURED_ITEMS} />
    </>
  );
};

export default React.memo(Home);
