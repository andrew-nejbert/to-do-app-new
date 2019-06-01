import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import styled from "styled-components";
import { FaCheckSquare, FaSquare } from "react-icons/fa";
import { MinusCircle } from "styled-icons/boxicons-regular/MinusCircle";

export default function Notes() {
  const daten = useContext(TodoContext);
  return (
    <div>
      {daten.state.myOutput.map((notizEintrag, index) => (
        <StyledNotes>
          {notizEintrag.checked ? (
            <div>
              <FaCheckSquare
                onClick={() => daten.state.handleChange(index)}
                style={{
                  width: 20,
                  height: 20,
                  color: "#f73758",
                  padding: "16px 10px 10px 10px",
                  cursor: "pointer"
                }}
              />
            </div>
          ) : (
            <div>
              <FaSquare
                onClick={() => daten.state.handleChange(index)}
                style={{
                  width: 20,
                  height: 20,
                  color: "#f73758",
                  padding: "16px 10px 10px 10px",
                  cursor: "pointer"
                }}
              />
            </div>
          )}

          {notizEintrag.checked ? (
            <StyledCheckText
              style={{ color: "gray", textDecoration: "line-through" }}
            >
              {notizEintrag.text}
            </StyledCheckText>
          ) : (
            <StyledCheckText style={{ color: "black" }}>
              {notizEintrag.text}
            </StyledCheckText>
          )}

          {/* <input
              type="checkbox"
              checked={notizEintrag.checked}
              onChange={() => daten.state.handleChange(index)}
            /> */}

          <DeleteIcon onClick={() => daten.state.deleteItem(notizEintrag)} />
        </StyledNotes>
      ))}
    </div>
  );
}

const StyledNotes = styled.div`
  display: flex;
  color: blue;
  padding: 2px;
  background: #fff;
  margin: 14px 0px 14px 0px;
  /* padding: 10px 0px 10px 0px; */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 5px;
`;

const StyledCheckText = styled.div`
  font-size: 20px;
  color: #333;
  vertical-align: bottom;
  padding-top: 5px;

  /* border: 2px solid green; */
`;

const DeleteIcon = styled(MinusCircle)`
  color: red;
  width: 20px;
  height: 20px;
  padding: 16px 24px 12px 12px;
  /* border: 2px solid red; */
  margin-left: auto;
  cursor: pointer;
`;
