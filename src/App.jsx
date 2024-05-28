import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

import Home from "./components/Home";
import Detail from "./components/Detail";

import ListItem from "./components/ListItem";
import uuid from "react-uuid";

function App() {
  const [list, setList] = useState([
    {
      id: uuid(),
      date: "2024-01-02",
      item: "의류",
      amount: "10000",
      content: "옷 샀음",
    },
    {
      id: uuid(),
      date: "2024-01-02",
      item: "식비",
      amount: "30000",
      content: "밥 먹음",
    },
  ]);

  return (
    <>
      <GlobalStyle />

      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home list={list} setList={setList} />} />
        <Route
          path="/Detail/:id"
          element={<Detail list={list} setList={setList} />}
        />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
