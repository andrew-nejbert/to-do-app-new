import React, { Component } from "react";
import ToDoInput from "./ToDoInput";
import AddButton from "./AddButton";
import "./App.css";

import ClearButton from "./ClearButton";
import Notes from "./Notes";
import TodoProvider from "./TodoProvider";
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <TodoProvider>
        <ScreenContainer>
          <TodoContainer>
            <TodoContainerTitle>ToDay-ToDo</TodoContainerTitle>
            <StyledInputButtonBox>
              <ToDoInput />
              <AddButton />
            </StyledInputButtonBox>

            <Notes />

            <ClearButton />
          </TodoContainer>
        </ScreenContainer>
      </TodoProvider>
    );
  }
}

export default App;

const TodoContainer = styled.div`
  width: 320px;
  height: auto;
  border: 2px solid #f8fbfc;
  padding: 100px;
  background-color: #f8fbfc;
  border-radius: 10px;
`;

const TodoContainerTitle = styled.h2`
  font-size: 30px;
  color: #ee5253;
`;

const ScreenContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background: #f93759;
`;

const StyledInputButtonBox = styled.div`
  display: flex;
`;
