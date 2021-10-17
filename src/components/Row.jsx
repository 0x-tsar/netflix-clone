import React from "react";
import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  /* min-width: 99vw; */
  min-width: 9200px;
  height: 14em;
  padding: 5px;
  margin: 2px;
  color: #ffffffc4;
  margin: 0 100px;
  margin-bottom: 10px;
  z-index: 1;
`;

const Row = ({ data, genre }) => {
  return (
    <Container>
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
