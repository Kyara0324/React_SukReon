import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: ${(props) => (props.$active ? "blue" : "gray")};
`;
function Layout({ children, active, onClick }) {
  return (
    <StyledLayout $active={active} onClick={onClick}>
      {active ? "Active" : "Inactive"} {children}
    </StyledLayout>
  );
}

export default Layout;
