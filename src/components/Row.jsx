import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  /* min-width: 99vw; */
  min-width: 9200px;
  height: 14em;
  padding: 5px;
  margin: 2px;
  color: #ffffffc4;
  margin: 0 10px;
  padding-left: 100px;
  margin-bottom: 10px;
  z-index: 9999;
  display: block;

  @media only screen and (min-width: 1750px) {
    height: 18em;
  }
`;

export const HolderArrows = styled.div`
  width: 50px;
  height: 13em;
  /* background-color: #ff000040; */
  background-color: #ffffff78;
  cursor: pointer;
  margin-top: 20px;
  position: absolute;
  z-index: 20000;

  :hover {
    background-color: white;
  }
`;

const Row = ({ data, genre }) => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [showing, setShowing] = useState("none");

  return (
    <Container
      onMouseEnter={() => {
        setShowing("flex");
      }}
      onMouseLeave={() => {
        setShowing("none");
      }}
    >
      <HolderArrows
        style={{ left: 0, marginLeft: 10, display: showing }}
      ></HolderArrows>
      <HolderArrows
        style={{
          right: 0,
          marginRight: 10,
          display: showing,
        }}
      ></HolderArrows>
      <h2 style={{ textShadow: "1px 1px rgba(0,0,0,0.6)" }}>{genre}</h2>
      {data.map((item, key) => {
        return item.backdrop_path ? (
          <Card key={key} item={item} genre={genre}></Card>
        ) : (
          <div
            key={key}
            style={{ position: "absolute", display: "none" }}
          ></div>
        );
      })}
    </Container>
  );
};

export default Row;
