import React from "react";
import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  /* min-width: 99vw; */
  min-width: 4200px;
  height: 14em;
  padding: 5px;
  margin: 2px;
  color: #ffffffc4;
  margin: 0 100px;
  /* margin-top: 50px; */
  /* margin-bottom: 10px; */
`;

const Row = ({ data, genre }) => {
  return (
    <Container>
      <h2>{genre}</h2>
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
