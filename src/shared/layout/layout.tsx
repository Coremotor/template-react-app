import React from "react";
import type { FC } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "widgets/header";

const Layout: FC = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer>Footer</Footer>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin: 0 auto;
`;

const Main = styled.main`
  flex-grow: 1;
`;
const Footer = styled.footer`
  padding: 20px 0;
`;
