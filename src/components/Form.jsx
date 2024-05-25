import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

function Form({
  date,
  setDate,
  title,
  setTitle,
  pride,
  setPride,
  content,
  setContent,
  addList,
}) {
  return (
    <>
      <StyledDiv>
        <div>
          <p>날짜</p>
          <input
            type="text"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          ></input>
        </div>
        <div>
          <p>항목</p>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div>
          <p>금액</p>
          <input
            type="text"
            value={pride}
            onChange={(event) => setPride(event.target.value)}
          ></input>
        </div>
        <div>
          <p>내용</p>
          <input
            type="text"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></input>
        </div>
        <button type="button" onClick={addList}>
          추가
        </button>
      </StyledDiv>
    </>
  );
}

export default Form;
