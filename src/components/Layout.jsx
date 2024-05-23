import styled from "styled-components";

const StyledLayout = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
  text-align: center;
`;
function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

export default Layout;
