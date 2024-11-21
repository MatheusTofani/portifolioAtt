import Descricao from "../../components/descricao";
import Habilidades from "../../components/habilidades";
import { Container, Content, Grid, Title } from "./style";
import HTML from "../../assets/html.png"
import CSS from "../../assets/css.png"
import Java from "../../assets/java.png"
import React from "../../assets/reactlogo.png"
import Boot from "../../assets/bootstrap.png"
import Type from "../../assets/type.png"
const Desc = () => {
  const habilidadesData = [
    { nome: "HTML", imagem: HTML, fill: "80%" },
    { nome: "CSS", imagem: CSS, fill: "70%" },
    { nome: "JavaScript", imagem: Java, fill: "60%" },
    { nome: "TypeScript", imagem: Type, fill: "90%" },
    { nome: "React", imagem: React, fill: "90%" },
    { nome: "Bootstrap", imagem: Boot, fill: "90%" },
  ];

  return (
    <>
      <Container>
    <Descricao />
      </Container>
      <Content>
        <Title>Habilidades</Title>
      <Grid>
      {habilidadesData.map((habilidade, index) => (
          <Habilidades
            key={index}
            nome={habilidade.nome}
            imagem={habilidade.imagem}
            fill={habilidade.fill}
          />
        ))}
         </Grid>
         </Content>
    </>
  );
};

export default Desc;
