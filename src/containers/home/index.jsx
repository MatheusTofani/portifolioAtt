import Particle from "../../components/particles";
import SnowParticles from "../../components/particles";
import React from "../../components/react";
import TitleName from "../../components/title";
import { Container } from "./style";

const Home = () => {
  return (
    <>
  <Container>
    <TitleName />
    <React />
    <Particle />
  </Container>
    </>
  );
};

export default Home;