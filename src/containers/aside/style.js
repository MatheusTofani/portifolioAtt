import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const AsideContainer = styled.aside`
  background-color: #0a0a0a;
  height: 100vh;
  box-shadow: 5px 0px 19.9px 2px rgba(0, 0, 0, 0.25);
  width: 300px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  position: fixed;
  z-index: 1000;
`;

export const AsideTitle = styled.div`
  text-align: center;
  color: white;
  font-family: "Roboto Mono";
  font-size: 24px; 
  margin-bottom: 30px;
`;

export const AsideListWrapper = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
`;

export const AsideList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%; 
`;

export const AsideListItem = styled.li`
  color: ${(props) => (props.isActive ? "#6edbfb" : "white")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  margin: 15px 0;
  padding: 10px;
  width: 100%;

  &:hover {
    color: #6edbfb;
    cursor: pointer;
  }
`;

export const AsideListItemText = styled.div`
  font-family: "Roboto Mono";
  text-align: left; 
  flex-grow: 1; 
`;
