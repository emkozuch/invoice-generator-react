import "./normalize.css";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Menu } from "./components/organisms/Menu/Menu";

function App() {
  return (
    <Container>
      <nav>
        <Menu />
      </nav>
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}
const Content = styled.main`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export default App;
