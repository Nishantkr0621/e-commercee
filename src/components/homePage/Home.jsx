import React from "react";
import HomeSlide from "./HomeSlide";
import ImageOne from "./HomeImage/ImageOne";
import ImageTwo from "./HomeImage/ImageTwo";
import ImageThree from "./HomeImage/ImageThree";
import ImageFour from "./HomeImage/ImageFour";
import ImageFive from "./HomeImage/ImageFive";
import { Link } from "react-router-dom";
import FootWearImage from "./HomeImage/FootWearImg/FootWearImage";

const Home = () => {
  return (
    <>
      <HomeSlide />
      <Link to="/topwear">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flexWrap: "wrap"
          }}
        >
          <ImageOne />
          <ImageTwo />
          <ImageThree />
          <ImageFour />
          <ImageFive />
        </div>
      </Link>

      <FootWearImage />
    </>
  );
};
export default Home;
