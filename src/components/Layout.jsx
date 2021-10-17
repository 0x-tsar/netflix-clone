import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

export const Container = styled.div`
  grid-area: banner;
  /* background-color: red; */
`;

const Layout = ({ currentBackdrop }) => {
  return (
    <Container>
      <Banner currentBackdrop={currentBackdrop}></Banner>
    </Container>
  );
};

export default Layout;
