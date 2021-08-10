import React from "react";
import { Container, Aside, Main } from "./Layout.style";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Aside>menu</Aside>
      <Main>{children}</Main>
      <Aside>footer</Aside>
    </Container>
  );
};
