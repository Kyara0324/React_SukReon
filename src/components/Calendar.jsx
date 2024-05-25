import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const StyledMonth = styled.button`
  text-align: center;
  font-size: 18px;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  color: var(--black-alpha-100, #000);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "blue" : "red")};
`;

const MonthContainer = styled.div`
  //나중에 가운데 정렬하기
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

function Calendar({ monthy, setMonthy }) {
  const selectMonth = (month) => {
    setMonthy(month);
  };
  return (
    <MonthContainer>
      {monthList.map((month) => (
        <StyledMonth
          onClick={() => selectMonth(month)}
          isSelected={month === monthy}
          key={month}
        >
          {month}월
        </StyledMonth>
      ))}
    </MonthContainer>
  );
}

export default Calendar;
