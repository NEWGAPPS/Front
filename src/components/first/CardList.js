import React from "react";
import Card from "./Card";
import styled from "styled-components";

function CardList(props) {
  //  배열 받아와서 반복 횟수만큼 Card 컴포넌트 생성
  // 생성되는 Card엔  {호선, {역1,역2,역3,역4}, 지하철의 상대적 위치 } 전달해줘야함
  let isExist = false;

  return (
    <CardListContainer>
      {props?.data?.result_data?.map((card, index) => {
        return <Card {...card} key={index} />;
      })}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  margin: 0px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  overflow-y: scroll;
`;

const Guide = styled.div`
  margin: 50px 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  line-height: 200%;
`;
export default CardList;
