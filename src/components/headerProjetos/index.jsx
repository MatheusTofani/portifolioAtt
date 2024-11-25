import React from "react";
import { Button, Form, Header, Search, Dropdown, DropdownButton, DropdownContent, DropdownItem } from "./style";

const HeaderProjetos = ({ setCategoriaSelecionada, categoriaSelecionada, setSearchTerm }) => {
  const handleCategoriaSelect = (value) => {
    setCategoriaSelecionada(value); // Atualiza a categoria selecionada
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Atualiza o valor de pesquisa com o texto digitado
  };

  return (
    <Header>
      <Form>
        <Search
          placeholder="Pesquisar por projeto"
          onChange={handleSearchChange} // Chama a função ao digitar na pesquisa
        />
      </Form>

      <Dropdown>
        <DropdownButton>{categoriaSelecionada}</DropdownButton>
        <DropdownContent>
          <DropdownItem onClick={() => handleCategoriaSelect("Todos")}>Todos</DropdownItem>
          <DropdownItem onClick={() => handleCategoriaSelect("EBAC")}>EBAC</DropdownItem>
          <DropdownItem onClick={() => handleCategoriaSelect("Pessoal")}>Pessoal</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </Header>
  );
};

export default HeaderProjetos;
