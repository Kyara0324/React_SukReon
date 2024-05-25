import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
`;

function Detail({ list, setList }) {
  const [selectedList, setSelectedList] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const listId = list.find((searchListId) => searchListId.id === id);
    setSelectedList(listId);
  }, [id]);

  return (
    <div>
      <StyledList>
        <p>{selectedList?.date}</p>
        <p>{selectedList?.title}</p>
        <p>{selectedList?.pride}</p>
        <p>{selectedList?.content}</p>
      </StyledList>
    </div>
  );
}

export default Detail;
