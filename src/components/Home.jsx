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
  const [monthy, setMonthy] = useState(1);
  console.log(monthy);

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [pride, setPride] = useState("");
  const [content, setContent] = useState("");

  const myUUID = uuid();
  console.log(myUUID);

  const addList = () => {
    // 1. 객체 만들기 2. 만든 객체를 배열에 넣어주기 3.input 초기화
    const newList = {
      id: uuid(),
      date,
      title,
      pride,
      content,
    };
    setList([...list, newList]);
    setDate("");
    setTitle("");
    setPride("");
    setContent("");
  };

  return (
    <StyledHome>
      <StyledBackGround>
        <Form
          date={date}
          setDate={setDate}
          title={title}
          setTitle={setTitle}
          pride={pride}
          setPride={setPride}
          content={content}
          setContent={setContent}
          addList={addList}
        />
        <Calendar monthy={monthy} setMonthy={setMonthy} />
        <ListItem list={list} />
        {/* list 컴포넌트 완성하고 풀기 */}
        {/* map을 공부하면 ListItem을 어떻게 써야할지 알수있음 */}
      </StyledBackGround>
    </StyledHome>
  );
}

export default Home;
