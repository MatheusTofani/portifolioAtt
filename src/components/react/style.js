import styled, { keyframes } from "styled-components";

const upAndDown = keyframes`
  0% {
    transform: translateY(0); 
  }
  50% {
    transform: translateY(-20px); 
  }
  100% {
    transform: translateY(0); 
  }
`;

export const ReactImg = styled.img`
  height: 500px;
  animation: ${upAndDown} 2s ease-in-out infinite; 
`;
