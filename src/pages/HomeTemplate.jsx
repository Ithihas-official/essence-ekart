import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Sidebar } from "./../components";
const Header = styled.header`
  z-index: 2;
  width: 100vw;
  position: fixed;
  top: 0;
  background:var(--bgColor);
`;
const MainHome = styled.main`
background:var(--bgColor);
`;

const HomeTemplate = () => {
  return (
    <>
      <Header>
        <Navbar />
        <Sidebar />
      </Header>
      <MainHome>
        <Outlet />
      </MainHome>
    </>
  );
};

export default HomeTemplate;
