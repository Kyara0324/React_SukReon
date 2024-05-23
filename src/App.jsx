import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

import Home from "./components/Home";
import Calendar from "./components/Calendar";
import Form from "./components/Form";
import Layout from "./components/Layout";
import List from "./components/List";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <div>
          <Calendar onClickPath="/" />
          <Calendar onClickPath="/Form" />
        </div>
      </Layout>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Form" element={<Form />} />
        {/* <Route path="/Layout" element={<Home />} /> */}
        <Route path="/List" element={<List />} />
      </Routes>
    </>
  );
}

export default App;
