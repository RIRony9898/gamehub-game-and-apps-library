import React from "react";
import Container from "../Components/Container";

const GamePage = () => {
  return (
    <div>
      <Container>
        {/* page title and subtitle */}
        <div className="text-center my-10 space-y-3">
          <h2 className="text-5xl font-bold">Our All Applications</h2>
          <p className="text-xl">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>
      </Container>
    </div>
  );
};

export default GamePage;
