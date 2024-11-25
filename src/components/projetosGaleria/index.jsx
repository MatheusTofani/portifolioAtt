import React from "react";
import Slider from "react-slick";
import { Container, Content, ImageProject, ItemDescription, ItemLink, ItemTitle, Itens, ItensContainer, Title } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjetosGaleria = ({ categoria, projetos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Content>
        <Title>{categoria}</Title> 
        <ItensContainer>
          <Slider {...settings}>
            {projetos.map((projeto) => (
              <Itens key={projeto.id}>
                <ItemLink href={projeto.link} target="_blank" rel="noopener noreferrer">
                <ImageProject src={projeto.imagem} alt={projeto.titulo} />
                <ItemTitle>{projeto.titulo}</ItemTitle>
                <ItemDescription>{projeto.descricao}</ItemDescription>
                </ItemLink>
              </Itens>
            ))}
          </Slider>
        </ItensContainer>
      </Content>
    </Container>
  );
};

export default ProjetosGaleria;
