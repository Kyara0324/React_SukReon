import Layout from "./Layout";
import { useHistory } from "react-router-dom";

function Calendar({ onClickPath }) {
  const history = useHistory();

  const onClickBtn = (path) => {
    history.push(path);
  };

  return (
    <>
      <Layout>
        <button
          onClick={() => {
            onClickBtn(onClickPath);
          }}
        >
          Home으로
        </button>
      </Layout>
    </>
  );
}

export default Calendar;
