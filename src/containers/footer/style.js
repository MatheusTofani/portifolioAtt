import styled from "styled-components";

export const Container = styled.footer`
  height: 70px;
  width: 100%;
  background-color: #1b1b1e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  margin-top: 20px;
`;

export const Title = styled.div`
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 300;
  color: white;
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  font-size: 32px;
`;

export const Link = styled.a`
  color: white;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #6EDBFB;
    cursor: pointer;
    transform: rotate(-10deg);
  }
`;
