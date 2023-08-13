import React from "react";
import Card from "./Card";
import styled from "styled-components";

function CardList() {
  //  배열 받아와서 반복 횟수만큼 Card 컴포넌트 생성
  // 생성되는 Card엔  {호선, {역1,역2,역3,역4}, 지하철의 상대적 위치 } 전달해줘야함
  // 예를 들어서
  // {{5, {신길, 영등포시장, 영등포구청, 양평}, 지하철1{신길->영등포시장}, 지하철2{양평->영등포구청}}},{2, {문래, 영등포구청, 당산, 합정}, 지하철1{문래->영등포구청}, 지하철2{당산역 정차중}} };
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
