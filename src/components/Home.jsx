import styled from "styled-components";
import Form from "./Form";
import Calendar from "./Calendar";
import { useState } from "react";
import ListItem from "./ListItem";
import uuid from "react-uuid";

const StyledHome = styled.div`
  width: 100%;
  background-color: aqua;
`;

const StyledBackGround = styled.div`
  width: 1000px;
  background-color: white;
  margin: 0 auto;
`;

function Home({ list, setList }) {
  const [selectedMonth, setSelectedMonth] = useState(1);
  console.log(selectedMonth);

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [content, setContent] = useState("");

  const myUUID = uuid();
  console.log(myUUID);

  const addList = () => {
    // 1. 객체 만들기 2. 만든 객체를 배열에 넣어주기 3.input 초기화
    const newList = {
      id: uuid(),
      date,
      item,
      amount,
      content,
    };
    setList([...list, newList]);
    setDate("");
    setItem("");
    setAmount("");
    setContent("");
  };

  return (
    <StyledHome>
      <StyledBackGround>
        <Form
          date={date}
          setDate={setDate}
          item={item}
          setItem={setItem}
          amount={amount}
          setAmount={setAmount}
          content={content}
          setContent={setContent}
          addList={addList}
        />
        <Calendar
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
        />
        <ListItem list={list} selectedMonth={selectedMonth} />
      </StyledBackGround>
    </StyledHome>
  );
}

export default Home;
