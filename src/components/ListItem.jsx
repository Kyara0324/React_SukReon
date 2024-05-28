import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  transition: transform 0.2s ease-in-out 0s;
  cursor: pointer;
`;

function ListItem({ list, selectedMonth }) {
  const navigate = useNavigate();
  const moveDetail = (detailId) => {
    navigate(`/Detail/${detailId}`);
  };

  return (
    <div>
      {list
        .filter((item) => parseInt(item.date.split("-")[1]) === selectedMonth)
        .map((item) => (
          <StyledItem onClick={() => moveDetail(item.id)} key={item.id}>
            <p>{item.date}</p>
            <p>{item.item}</p>
            <p>{item.amount}</p>
            <p>{item.content}</p>
          </StyledItem>
        ))}
    </div>
  );
}

export default ListItem;
