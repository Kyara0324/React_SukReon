import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.div`
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &.update {
    background-color: #007bff;
    color: #fff;
  }

  &.delete {
    background-color: #dc3545;
    color: #fff;
  }

  &.back {
    background-color: #6c757d;
    color: #fff;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Background = styled.div`
  background-color: #2ecc71;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
`;

function Detail({ list, setList }) {
  const [selectedList, setSelectedList] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const listId = list.find((searchListId) => searchListId.id === id);
    setSelectedList(listId);
  }, [id]);

  return (
    <Background>
      <StyledList>
        <Form>
          <p>{selectedList?.date}</p>
          <Input type="date" id="date" name="date" placeholder="날짜" />

          <p>{selectedList?.title}</p>
          <Input type="text" id="item" name="item" placeholder="항목" />

          <p>{selectedList?.pride}</p>
          <Input type="number" id="amount" name="amount" placeholder="금액" />

          <p>{selectedList?.content}</p>
          <Input type="text" id="content" name="content" placeholder="내용" />

          <Buttons>
            <Button type="button" className="update">
              수정
            </Button>
            <Button type="button" className="delete">
              삭제
            </Button>
            <Button type="button" className="back">
              뒤로 가기
            </Button>
          </Buttons>
        </Form>
      </StyledList>
    </Background>
  );
}

export default Detail;
