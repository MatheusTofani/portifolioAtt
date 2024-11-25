import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        
    }

    body {
        background-color: #141414;
        
    }
`;

export const Container = styled.div`
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
