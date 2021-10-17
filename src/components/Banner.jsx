import React from "react";
import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  background-color: green;
  height: 100%;
  @media only screen and (min-width: 728px) {
    /* padding: 4px !important; */
    background-color: red;
    height: 70%;
    margin: 0;
  }
`;

export const Img = styled.img`
  width: 100vw;
`;

const Banner = ({ currentBackdrop }) => {
  console.log(currentBackdrop);
  return (
    <Container>
      <div
        style={{
          maxHeight: "60vh",
          overflow: "hidden",
        }}
      >
        <Img src={currentBackdrop} alt="" />
      </div>
    </Container>
  );
};

export default Banner;
