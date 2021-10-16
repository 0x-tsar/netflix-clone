import React from "react";
import styled from "styled-components";
import Row from "./Row";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
`;

const Main = () => {
  return (
    <Container>
      <Row></Row>
      <Row></Row>
    </Container>
  );
};

export default Main;
