import React from "react";
import Image from "next/image";

import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 100%;
  display: inline-block;
  margin-right: 5px;
  /* padding-bottom: 100px; */
  /* color: white; */
`;

const Card = ({ item, genre }) => {
  return (
    <Container>
      <div
        style={{
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
          width="200px"
          height="130px"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Card;
