import React from "react";
import Container from "./Container/Container";
import "./Home.css";
import Slide from "./Slide/Slide";

function Home() {
  return (
    <div className="home">
      <Slide />
      <div className="home__container">
        <Container />
      </div>
    </div>
  );
}

export default Home;
