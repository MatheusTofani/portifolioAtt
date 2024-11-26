import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px 80px;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 40px;
`;

export const Title = styled.h2`
  color: white;
  font-family: "Poppins";
  font-size: 32px;
  font-weight: 300;
  letter-spacing: 7px;
`;

export const ItensContainer = styled.div`
  margin-top: 40px;
`;

export const Itens = styled.div`
  width: 30%;
  margin-left: 20px;
  text-decoration: none;
  display: inline-block; /* ou flex, dependendo do layout que você deseja */

`;

export const ImageProject = styled.img`
  width: 90%;
  height: 200px;
`;

export const ItemTitle = styled.h3`
  color: white;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
`;

export const ItemDescription = styled.p`
 
  font-family: "Roboto Mono";
  font-size: 14px;
  font-weight: 300;
  margin-top: 5px;
  width: 90%;


`;

export const ItemLink = styled.a`
  text-decoration: none;
  display: block;  
  width: 100%;
  height: 100%;  
  color: #cdc9c9;
transition: all 0.2s ease-in-out;
  &:hover {
    color: #6edbfb; 
    transform: scale(1.02);
  }
`;

