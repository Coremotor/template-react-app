import type { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { E_Routes } from "app/router/routes";
import React from "react";
import { isAllowed } from "shared/guard/guard";

const Navigation: FC = () => {
  return (
    <Container>
      <List>
        <Item>
          <Link to={E_Routes.home}>Home</Link>
        </Item>

        {isAllowed() && (
          <Item>
            <Link to={E_Routes.profile}>Profile</Link>
          </Item>
        )}

        <Item>
          <Link to={E_Routes.posts}>Posts</Link>
        </Item>

        <Item>
          <Link to={E_Routes.about}>About</Link>
        </Item>
      </List>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  margin-right: 20px;
`;
const List = styled.ul`
  display: flex;
  list-style: none;
`;
const Item = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
