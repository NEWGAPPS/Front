import React from "react";
import Card from "./Card";
import { styled } from "styled-components";

function CardContainer() {
  return (
    <>
      <Container>
        <Card />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 0 auto;
`;

export default CardContainer;
