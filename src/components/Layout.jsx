/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

export const Container = styled.div`
  grid-area: banner;
  /* background-color: red; */
`;

export const Header = styled.div`
  width: 100vw;
  height: 70px;
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

  transition-duration: 0.4s;

  background-color: ${(props) => props.opacity};
`;

const Layout = ({ currentBackdrop }) => {
  const [headerOpacitity, setHeaderOpacitity] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      if (scroll >= 30) {
        setHeaderOpacitity("rgba(0,0,0)");
      } else {
        setHeaderOpacitity("rgba(0,0,0,0)");
      }
    });
  }, []);

  return (
    <Container>
      <Header opacity={headerOpacitity}>
        <img
          style={{ width: "90px" }}
          src="./netflix-logo.png"
          alt="Netflix Logo"
        />

        <div style={{ color: "white" }}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Tv Shows</a>
            </li>
            <li>
              <a href="/">Movies</a>
            </li>
          </ul>
        </div>
      </Header>
      <Banner currentBackdrop={currentBackdrop}></Banner>
    </Container>
  );
};

export default Layout;
