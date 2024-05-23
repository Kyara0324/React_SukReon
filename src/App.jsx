import { Routes, Route, useNavigate } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

import Home from "./components/Home";
import Calender from "./components/Calender";
import Form from "./components/Form";
import Layout from "./components/Layout";
import List from "./components/List";

function App() {
  const navi = useNavigate();
  const onClickBtn = (path) => {
    navi(path);
  };

  return (
    <>
      <GlobalStyle />
      <Layout>
        <div>
          <button
            onClick={() => {
              onClickBtn("/");
            }}
          >
            Home으로
          </button>
          <button
            onClick={() => {
              onClickBtn("/Calender");
            }}
          >
            Calender으로
          </button>
          <button
            onClick={() => {
              onClickBtn("/Form");
            }}
          >
            Form으로
          </button>
          <button
            onClick={() => {
              onClickBtn("/Layout");
            }}
          >
            Layout으로
          </button>
          <button
            onClick={() => {
              onClickBtn("/List");
            }}
          >
            List으로
          </button>
        </div>
      </Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calender" element={<Calender />} />
        <Route path="/Form" element={<Form />} />
        {/* <Route path="/Layout" element={<Home />} /> */}
        <Route path="/List" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
