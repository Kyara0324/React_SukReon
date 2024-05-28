import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
  const [selectedList, setSelectedList] = useState({
    id: "",
    date: "",
    item: "",
    amount: "",
    content: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const listId = list.find((searchListId) => searchListId.id === id);
    if (listId) {
      setSelectedList(listId);
    }
  }, [id, list]);

  // useEffect(() => {
  //   localStorage.setItem("expense", list);
  // }, [list]);

  const handleUpdate = () => {
    console.log(selectedList);
    const updatedList = list.map((item) =>
      item.id === id ? { ...selectedList } : item
    );
    setList(updatedList);
    navigate("/");
  };

  const handleDelete = () => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedList({ ...selectedList, [name]: value });
  };

  return (
    <Background>
      <StyledList>
        <Form>
          <Label htmlFor="date">날짜</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={selectedList.date || ""}
            onChange={handleChange}
          />

          <Label htmlFor="item">항목</Label>
          <Input
            type="text"
            id="item"
            name="item"
            value={selectedList.item || ""}
            onChange={handleChange}
          />

          <Label htmlFor="amount">금액</Label>
          <Input
            type="number"
            id="amount"
            name="amount"
            value={selectedList.amount || ""}
            onChange={handleChange}
          />

          <Label htmlFor="content">내용</Label>
          <Input
            type="text"
            id="content"
            name="content"
            value={selectedList.content || ""}
            onChange={handleChange}
          />

          <Buttons>
            <Button type="button" className="update" onClick={handleUpdate}>
              수정
            </Button>
            <Button type="button" className="delete" onClick={handleDelete}>
              삭제
            </Button>
            <Button type="button" className="back" onClick={handleBack}>
              뒤로 가기
            </Button>
          </Buttons>
        </Form>
      </StyledList>
    </Background>
  );
}

export default Detail;
