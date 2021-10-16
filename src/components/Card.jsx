import React from "react";

import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 100%;
  background-color: blue;
  display: inline-block;
  margin-right: 5px;
`;

const Card = () => {
  return <Container></Container>;
};

export default Card;
