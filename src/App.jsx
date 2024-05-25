import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";

import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <GlobalStyle />

      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
