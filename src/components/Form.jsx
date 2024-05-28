import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

function Form({
  date,
  setDate,
  item,
  setItem,
  amount,
  setAmount,
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
            value={item}
            onChange={(event) => setItem(event.target.value)}
          ></input>
        </div>
        <div>
          <p>금액</p>
          <input
            type="text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
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
