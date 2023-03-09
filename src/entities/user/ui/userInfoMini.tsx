import React from "react";
import type { FC } from "react";
import { useUserStore } from "entities/user/model/store";
import styled from "styled-components";

export const UserInfoMini: FC = () => {
  const user = useUserStore((state) => state.user);

  return (
    <Container>
      <Name>{user?.name}</Name>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Name = styled.span``;
