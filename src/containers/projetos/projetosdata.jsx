import GamesShop from "../../assets/gamesshop.png";
import Caco from "../../assets/caco.png";
import Raku from "../../assets/raku.png";
import OnePiece from "../../assets/onepiece.png";
import Visionaire from "../../assets/visionaire.png";

const projetosData = {
  EBAC: [
    {
      id: 1,
      link: 'https://games-shop-kohl.vercel.app/',
      titulo: "Projeto 1 - Games Shop",
      descricao:
        "Primeiro projeto realizado na EBAC, utilizando HTML, CSS, montando um projeto simples para criar uma loja virtual fictícia.",
      imagem: GamesShop,
    },
    {
      id: 2,
      link: 'https://caco-five.vercel.app/',
      titulo: "Projeto 2 - Escola Caco",
      descricao:
        "Segundo projeto realizado na EBAC, utilizando HTML, CSS e JavaScript para criar duas calculadoras funcionais e estilizadas.",
      imagem: Caco,
    },
    {
      id: 3,
      link: 'https://raku.vercel.app/',
      titulo: "Projeto 3 - Raku",
      descricao:
        "Projeto focado em responsividade, utilizando o Bootstrap para criar o layout de um site dinâmico e adaptável.",
      imagem: Raku,
    },
    {
      id: 4,
      link: 'https://one-piece-sand.vercel.app/',
      titulo: "Projeto 4 - One Piece",
      descricao:
        "Projeto para criar uma landing page de uma série popular, incluindo ferramentas interativas desenvolvidas com JavaScript.",
      imagem: OnePiece,
    },
  ],
  Pessoal: [
    {
      id: 5,
      link: 'https://visionaire-evvento.vercel.app/',
      titulo: "Visionaire - Landing Page",
      descricao:
        "Uma landing page da marca de roupas 'Visionaire', utilizando plugins e um contador real montado em JavaScript.",
      imagem: Visionaire,
    },
    {
      id: 6,
      titulo: "Controle de Tarefas",
      descricao:
        "Aplicativo simples de controle de tarefas utilizando React, com armazenamento local via Local Storage.",
      imagem: Raku,
    },
  ],
};

export default projetosData;
