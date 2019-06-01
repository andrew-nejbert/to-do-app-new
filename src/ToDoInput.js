import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import styled from "styled-components";

function ToDoInput() {
  const daten = useContext(TodoContext);

  return (
    <StyledInput
      type="text"
      value={daten.state.myInput}
      onChange={event => daten.state.changeMyInput(event.target.value)}
    />
  );
}

export default ToDoInput;

const StyledInput = styled.input`
  background-color: #fff;
  color: #333;
  width: 75%;
  height: 42px;
  font-size: 20px;
  border: 2px solid #ee5253;
  border-radius: 5px;
  margin: 0px 5px 0px 0px;
  background: #fff;
`;
