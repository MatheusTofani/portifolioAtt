import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 400px);
  text-align: center;
  gap: 20px; 
`;

export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Title = styled.h2`
color: white;
font-family: "Poppins";
font-size: 32px;
font-weight: 300;
letter-spacing: 7px;
margin-bottom: 50px;
`;