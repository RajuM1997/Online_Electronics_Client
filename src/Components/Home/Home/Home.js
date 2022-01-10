import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Work from "../../Work/Work";
import About from "../About/About";
import Banner from "../Banner/Banner";
import News from "../News/News";
import Review from "../Review/Review";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Service />
      <News />
      <Work />
      <Review />
    </div>
  );
};

export default Home;
