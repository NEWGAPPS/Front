import React from "react";
import Card from "./Card";
import styled from "styled-components";

function CardList() {
  //  배열 받아와서 반복 횟수만큼 Card 컴포넌트 생성
  // 생성되는 Card엔  {direction (어디 행), {역1,역2,역3,역4,역5} (인접한 역 5개) } 전달해줘야함
  return (
    <CardListContainer>
      <Card />
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  margin: 0 20px;
`;

export default CardList;
