import { Bar, Container, Content, Image } from "./style";

const Habilidades = ({ nome, imagem, fill }) => {
  return (
    <Container>
      <Image src={imagem} />
      <Content>
        <h2>{nome}</h2>
        <Bar fill={fill}></Bar>
      </Content>
    </Container>
  );
};

export default Habilidades;
