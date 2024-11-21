import React, { useState } from "react";
import {
  AsideContainer,
  AsideList,
  AsideListItem,
  AsideListItemText,
  AsideTitle,
  AsideListWrapper,
} from "./style";
import { IoHomeSharp } from "react-icons/io5";
import { BsCollectionFill } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";

const Aside = ({ setActiveTab }) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (tab) => {
    setActiveTab(tab);
    setActiveItem(tab);
  };

  return (
    <AsideContainer>
      <AsideTitle>Teste</AsideTitle>
      <AsideListWrapper>
        <AsideList>
          <AsideListItem
            onClick={() => handleItemClick("home")}
            isActive={activeItem === "home"}
          >
            <AsideListItemText>Home</AsideListItemText>
            <IoHomeSharp />
          </AsideListItem>

          <AsideListItem
            onClick={() => handleItemClick("sobre")}
            isActive={activeItem === "sobre"}
          >
            <AsideListItemText>Sobre</AsideListItemText>
            <BsLightbulbFill />
          </AsideListItem>

          <AsideListItem
            onClick={() => handleItemClick("projetos")}
            isActive={activeItem === "projetos"}
          >
            <AsideListItemText>Projetos</AsideListItemText>
            <BsCollectionFill />
          </AsideListItem>
        </AsideList>
      </AsideListWrapper>
    </AsideContainer>
  );
};

export default Aside;
