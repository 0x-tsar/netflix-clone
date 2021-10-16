import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Main from "./Main";

export const Container = styled.div`
  grid-area: banner;
  background-color: red;
`;

const Layout = () => {
  return (
    <Container>
      <Banner></Banner>
      <Main></Main>
    </Container>
  );
};

export default Layout;
