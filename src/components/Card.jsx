import React from "react";
import Image from "next/image";

import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 100%;
  /* background-color: black; */
  display: inline-block;
  margin-right: 5px;
  /* padding-bottom: 100px; */
  /* color: white; */
`;

// export const Img = styled.Image`
//   border-radius: 3px;
// `;

const Card = ({ item, genre }) => {
  console.log(genre);
  return (
    <Container>
      {/* <h2>{genre}</h2> */}

      <div
        style={{
          // width: "200px",
          // height: "130px",
          borderRadius: "3px",
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

  // return (
  //   <Container>
  //     <Image
  //       src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
  //       width="200px"
  //       height="120px"
  //       alt=""
  //     />
  //   </Container>
  // );
};

export default Card;
