/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

export const Container = styled.div`
  grid-area: banner;
  /* background-color: red; */
`;

export const Header = styled.div`
  width: 100vw;
  height: 80px;
  position: fixed;
  z-index: 8001;

  display: flex;
  align-items: center;
  padding-left: 50px;

  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 1) 80%
  );
`;

const Layout = ({ currentBackdrop }) => {
  return (
    <Container>
      <Header>
        <img
          style={{ width: "90px" }}
          src="./netflix-logo.png"
          alt="Netflix Logo"
        />
      </Header>
      <Banner currentBackdrop={currentBackdrop}></Banner>
    </Container>
  );
};

export default Layout;
