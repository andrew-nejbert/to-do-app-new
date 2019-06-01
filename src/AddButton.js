import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import styled from "styled-components";
import { PlusCircle } from "styled-icons/boxicons-regular/PlusCircle";

function AddButton() {
  const daten = useContext(TodoContext);
  return (
    <StyledButton onClick={daten.state.addItem}>
      <PlusIcon />
    </StyledButton>
  );
}

export default AddButton;

const StyledButton = styled.button`
  background-color: #f73758;
  color: white;
  width: 20%;
  height: 20%;
  font-size: 30px;
  border: 2px solid #f73758;
  border-radius: 5px;
  cursor: pointer;
  outline-color: #f73758;
  &:hover {
    background-color: #f24d69;
    color: white;
    border: 2px solid #f24d69;
  }
`;

const PlusIcon = styled(PlusCircle)`
  width: 20px;
  height: 20px;
  padding: 10px;
`;
