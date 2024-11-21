import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 442px;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img``;

export const CmdImage = styled.img`
height: 20px;
margin-right: 15px;
`;

export const DescContainer = styled.div`
  height: 442px;
  width: 800px;
  background-color: #0a0a0a;
  border-radius: 30px;
  display: flex;
  margin-top: 20px;
`;

export const DescContent = styled.div`
width: 100%;
border-top-right-radius: 30px;
display: block;
`;

export const DescTitle = styled.h1`
  color: white;
  font-weight: 400;
  margin-bottom: 40px;
`;

export const DescHeader = styled.div`
  display: flex;
  min-width: 100%;
  height: 30px;
  background-color: #2f2f2f;
  border-top-right-radius: 30px;
  align-items: center;
  color: white;
  font-family: "Roboto Mono";
  letter-spacing: 2px;
  padding: 0 20px;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
`;