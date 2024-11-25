import React, { useState } from "react";
import HeaderProjetos from "../../components/headerProjetos";
import ProjetosGaleria from "../../components/projetosGaleria";
import projetosData from "./projetosdata"; // Importando os dados de projetos

const Projetos = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o texto de pesquisa

  // Função para filtrar projetos pela categoria e pela pesquisa
  const filtrarPorCategoria = () => {
    let projetosFiltrados = projetosData;

    // Filtra os projetos pela categoria
    if (categoriaSelecionada !== "Todos") {
      projetosFiltrados = { [categoriaSelecionada]: projetosData[categoriaSelecionada] };
    }

    // Filtra os projetos pela pesquisa (título e descrição)
    if (searchTerm) {
      projetosFiltrados = Object.entries(projetosFiltrados).reduce((acc, [categoria, projetos]) => {
        const projetosFiltradosCategoria = projetos.filter((projeto) =>
          projeto.titulo.toLowerCase().includes(searchTerm.toLowerCase()) || 
          projeto.descricao.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Só adiciona a categoria se houver projetos correspondentes
        if (projetosFiltradosCategoria.length > 0) {
          acc[categoria] = projetosFiltradosCategoria;
        }

        return acc;
      }, {});
    }

    return projetosFiltrados;
  };

  return (
    <>
      <HeaderProjetos
        setCategoriaSelecionada={setCategoriaSelecionada}
        categoriaSelecionada={categoriaSelecionada}
        setSearchTerm={setSearchTerm} // Passa a função para atualizar o estado da pesquisa
      />
      {Object.entries(filtrarPorCategoria()).map(([categoria, projetos]) => (
        <ProjetosGaleria key={categoria} categoria={categoria} projetos={projetos} />
      ))}
    </>
  );
};

export default Projetos;
