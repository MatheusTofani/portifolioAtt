import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  height: 150px;
  background-color: #222020;
  border: 4px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;

export const Content = styled.div`
  font-family: "Roboto Mono";
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
`;

export const Image = styled.img`
  height: 90px;
`;

export const Bar = styled.div`
  min-width: 200px;
  min-height: 15px;
  background-color: #fff;
  border-radius: 50px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.fill || "50%"};
    height: 100%;
    background-color: #6edbf9;
    border-radius: 50px;
  }
`;
