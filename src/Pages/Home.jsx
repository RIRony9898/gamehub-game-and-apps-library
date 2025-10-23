import React from "react";
import Container from "../Components/Container";
import Banner from "../Components/HomePage/Banner";
import PopularGames from "../Components/HomePage/PopularGames";
import PopularApps from "../Components/HomePage/PopularApps";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Container>
        <section>
          <Banner />
        </section>
        <section>
          <PopularGames />
        </section>
        <section>
          <PopularApps />
        </section>
      </Container>
    </div>
  );
};

export default Home;
