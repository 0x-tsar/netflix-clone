import React from "react";
import Image from "next/image";

import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 100%;
  display: inline-block;
  margin-right: 5px;

  @media only screen and (min-width: 1750px) {
    margin-right: 120px;
  }
`;

export const Holder = styled.div`
  cursor: pointer;

  transform: scale(1) translateY(0);
  transition-duration: 0.1s;
  transition-delay: 0.3s;
  display: flex;
  z-index: 10;
  border-radius: 5px;
  overflow: hidden;
  position: relative;

  :hover {
    transform: scale(1.5) translateY(-30px);
    z-index: 2000;
  }

  @media only screen and (min-width: 1750px) {
    width: 300px;
    margin-right: 200px;

    img {
      width: 400px;
    }
    /* height: 100%; */
  }
`;

const Card = ({ item, genre }) => {
  return (
    <Container>
      <Holder>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          width="200px"
          height="130px"
          alt=""
        />
      </Holder>
    </Container>
  );
};

export default Card;
