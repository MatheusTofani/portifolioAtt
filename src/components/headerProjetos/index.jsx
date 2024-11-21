import React, { useState } from "react";
import { Button, Form, Header, Search, Dropdown, DropdownButton, DropdownContent, DropdownItem } from "./style";

const HeaderProjetos = () => {
  const [selectedOption, setSelectedOption] = useState("Todos");

  const handleSelect = (value) => {
    setSelectedOption(value);
    console.log("Selecionado:", value); 
  };

  return (
    <Header>
      <Form>
        <Search placeholder="Pesquisar" />
        <Button>Buscar</Button>
      </Form>

      <Dropdown>
        <DropdownButton>{selectedOption}</DropdownButton>
        <DropdownContent>
          <DropdownItem onClick={() => handleSelect("Todos")}>Todos</DropdownItem>
          <DropdownItem onClick={() => handleSelect("EBAC")}>EBAC</DropdownItem>
          <DropdownItem onClick={() => handleSelect("Pessoal")}>Pessoal</DropdownItem>
        </DropdownContent>
      </Dropdown>
    </Header>
  );
};

export default HeaderProjetos;
