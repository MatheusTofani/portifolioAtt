import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #1B1B1E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;

export const Form = styled.form``;

export const Search = styled.input`
  border-radius: 50px;
  width: 290px;
  height: 40px;
  padding-left: 20px;
  background-color: #27272B;
  border: none;
  font-size: 16px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: white;
  color: #1B1B1E;
  height: 40px;
  border: none;
  width: 100px;
  font-size: 16px;
  border-radius: 50px;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
  background-color: #27272B;
  color: white;
  font-size: 16px;
  height: 40px;
  width: 120px;
  border: none;
  border-radius: 50px;
  text-align: left;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    background-color: #1B1B1E;
  }
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #1B1B1E;
  min-width: 120px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1;

  ${Dropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  color: white;
  padding: 10px 16px;
  cursor: pointer;

  &:hover {
    background-color: #27272B;
  }
`;
