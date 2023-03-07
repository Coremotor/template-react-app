import React from "react";
import type { FC } from "react";
import styled from "styled-components";
import Navigation from "entities/navigation";
import { UserInfoMini } from "entities/user";

const Header: FC = () => {
  return (
    <Container>
      <Logo>LOGO</Logo>
      <Navigation />
      <UserInfoMini />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0;
`;
const Logo = styled.div`
  margin-right: auto;
`;
