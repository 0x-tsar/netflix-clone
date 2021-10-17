import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  /* background-color: green; */
  height: 100%;
`;

export const Gradient = styled.div`
  width: 100vw;
  height: 100px;
  /* background-color: green; */
  /* margin-top: 10px; */
  grid-area: grad;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 20%,
    rgba(0, 0, 0, 1) 80%
  );

  transition-duration: 0.3s;

  position: relative;
  margin-top: -100px;
`;

export const Img = styled.img`
  width: 100vw;

  @media only screen and (min-width: 900) {
    z-index: 2000;
  }
`;

const Banner = ({ currentBackdrop }) => {
  console.log(currentBackdrop);
  return (
    <Container>
      <div
        style={{
          overflow: "hidden",
        }}
      >
        <Img src={currentBackdrop} alt="" />
      </div>
      <Gradient />
    </Container>
  );
};

export default Banner;
