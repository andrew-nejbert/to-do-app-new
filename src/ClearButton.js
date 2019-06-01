import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import styled from "styled-components";

function ClearButton(props) {
  const daten = useContext(TodoContext);
  return (
    <StyledButton onClick={daten.state.clearStorage}>
      clear storage
    </StyledButton>
  );
}

export default ClearButton;

const StyledButton = styled.button`
  background-color: #f73758;
  color: white;
  width: 100%;
  height: 50px;
  font-size: 20px;
  border: 2px solid #f73758;
  border-radius: 5px;
  margin-top: 10px;
  font-family: "Mandali", sans-serif;
  cursor: pointer;
  outline-color: #f73758;

  &:hover {
    background-color: #f24d69;
    color: white;
    border: 2px solid #f24d69;
  }
`;
