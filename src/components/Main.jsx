import React from "react";
import styled from "styled-components";
import Row from "./Row";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* flex-direction: column; */
`;

const Main = ({ data }) => {
  return (
    <Container>
      <Row data={data.action} genre="Action"></Row>
      <Row data={data.adventure} genre="Adventure"></Row>
      <Row data={data.animation} genre="Animation"></Row>
      <Row data={data.comedy} genre="Comedy"></Row>
      <Row data={data.crime} genre="Crime"></Row>
      <Row data={data.documentary} genre="Documentary"></Row>
      <Row data={data.drama} genre="Drama"></Row>
    </Container>
  );
};

export default Main;
