import React from "react";
import Container from "../Components/Container";
import Banner from "../Components/HomePage/Banner";
import PopularGames from "../Components/HomePage/PopularGames";
import PopularApps from "../Components/HomePage/PopularApps";
import useTitle from "../Hooks/useTitle";
import Newsletter from "../Components/HomePage/Newsletter";

const Home = () => {
  useTitle("Home");
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900/80 to-blue-900">
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
        <section>
          <Newsletter/>
        </section>
      </Container>
    </div>
  );
};

export default Home;
