import React, { useState } from "react";
import {
  AsideContainer,
  AsideList,
  AsideListItem,
  AsideListItemText,
  AsideTitle,
  AsideListWrapper,
  Image,
  TitleText,
} from "./style";
import { IoHomeSharp } from "react-icons/io5";
import { BsCollectionFill } from "react-icons/bs";
import { BsLightbulbFill } from "react-icons/bs";
import Eu from "../../../assets/eu.png";
const Aside = ({ setActiveTab }) => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (tab) => {
    setActiveTab(tab);
    setActiveItem(tab);
    window.scrollTo(0, 0); 
  };
  

  return (
    <AsideContainer>
      <AsideTitle>
        <Image src={Eu} />
      <TitleText>Matheus Tófani</TitleText>
      </AsideTitle>
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
