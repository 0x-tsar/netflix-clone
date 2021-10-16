import React from "react";
import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  min-width: 99vw;
  height: 8em;
  background-color: black;
  padding: 5px;
  margin: 2px;
`;

const Row = () => {
  return (
    <Container>
      <Card></Card>
      <Card></Card>
    </Container>
  );
};

export default Row;
