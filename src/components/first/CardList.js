import React from "react";
import Card from "./Card";
import styled from "styled-components";

function CardList() {
  //  배열 받아와서 반복 횟수만큼 Card 컴포넌트 생성
  // 생성되는 Card엔  {호선, {역1,역2,역3,역4}, 지하철의 상대적 위치 } 전달해줘야함
  // 예를 들어서
  const dummyList = [
    {
      id: "0",
      stationNum: "5",
      stationList: ["신길", "영등포시장", "영등포구청", "양평"],
      subwayList: [
        {
          id: 3028,
          way: "right",
          type: "급행",
          state: "진행중",
          before: "영등포구청", 
          after: "양평",
        },
        {
          id: 1023,
          way: "left",
          type: "일반",
          state: "정차",
          before: "신길",
          after: "",
        },
      ],
    },
    {
      id: "1",
      stationNum: "2",
      stationList: ["문래역", "영등포구청", "당산", "합정"],
      subwayList: [
        {
          id: 100,
          way: "right",
          type: "일반",
          state: "진행중",
          before: "당산",
          after: "합정",
        },
        {
          id: 200,
          way: "left",
          type: "일반",
          state: "진행중",
          before: "합정",
          after: "당산",
        },
      ],
    },
    {
      id: "0",
      stationNum: "7",
      stationList: ["신길", "영등포시장", "영등포구청", "양평"],
      subwayList: [
        {
          id: 3028,
          way: "right",
          type: "일반",
          state: "진행중",
          before: "영등포구청", 
          after: "양평",
        },
        {
          id: 1023,
          way: "left",
          type: "일반",
          state: "정차",
          before: "신길",
          after: "",
        },
      ],
    },
  ];
  return (
    <CardListContainer>
      {dummyList.map((card, index) => {
        return <Card {...card} key={index} />;
      })}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  margin: 0 20px;
  height: 73vh;
  overflow-y: scroll;
`;

export default CardList;
