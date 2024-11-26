import GamesShop from "../../../Public/gamesshop.png";
import Caco from "../../assets/caco.png";
import Raku from "../../assets/raku.png";
import OnePiece from "../../assets/onepiece.png";
import Visionaire from "../../assets/visionaire.png";
import Pokedex from "../../assets/pokedex.png";
import Port from "../../assets/portifolio.png"; 
const projetosData = {
  EBAC: [
    {
      id: 1,
      link: 'https://games-shop-kohl.vercel.app/',
      titulo: "Projeto 1 - Games Shop (Abril/2023)",
      descricao:
        "Primeiro projeto realizado na EBAC, utilizando HTML, CSS, montando um projeto simples para criar uma loja virtual fictícia.",
      imagem: GamesShop,
    },
    {
      id: 2,
      link: 'https://caco-five.vercel.app/',
      titulo: "Projeto 2 - Escola Caco (Maio/2023)",
      descricao:
        "Segundo projeto realizado na EBAC, utilizando HTML, CSS e JavaScript para criar duas calculadoras funcionais e estilizadas.",
      imagem: Caco,
    },
    {
      id: 3,
      link: 'https://raku.vercel.app/',
      titulo: "Projeto 3 - Raku (Junho/2023)" ,
      descricao:
        "Projeto focado em responsividade, utilizando o Bootstrap para criar o layout de um site dinâmico e adaptável.",
      imagem: Raku,
    },
    {
      id: 4,
      link: 'https://one-piece-sand.vercel.app/',
      titulo: "Projeto 4 - One Piece (Agosto/2023)",
      descricao:
        "Projeto para criar uma landing page de uma série popular, incluindo ferramentas interativas desenvolvidas com JavaScript.",
      imagem: OnePiece,
    },
  ],
  Pessoal: [
    {
      id: 5,
      link: 'https://visionaire-evvento.vercel.app/',
      titulo: "Visionaire - Landing Page (Setembro/2024)",
      descricao:
        "Uma landing page da marca de roupas 'Visionaire', utilizando plugins e um contador real montado em JavaScript.",
      imagem: Visionaire,
    },
    {
      id: 6,
      link:'https://pokedex-836m.vercel.app ',
      titulo: "Pokedex (Outubro/2024)",
      descricao:
        "Crinado uma pokedex funcional utilizando a pokeAPI e desenvolvendo o design pelo figma.",
      imagem: Pokedex,
    },
    {
      id: 7,
      link: 'https://matheustofaniold.vercel.app', 
      titulo: "Primeiro Portifolio (Agosto/2024)",
      descricao:
        "Meu primeiro portifolio desenvolvido",
      imagem: Port,
    }
  ],
};

export default projetosData;
