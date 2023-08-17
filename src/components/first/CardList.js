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
      stationNum: "2",
      stationList: ["합정", "신촌", "이대", "아현"],
      subwayList: [
        {
          id: 3028,
          way: "right",
          type: "일반",
          state: "진행중",
          before: "신촌",
          after: "이대",
        },
        {
          id: 1023,
          way: "left",
          type: "일반",
          state: "정차",
          before: "아현",
          after: "",
        },
      ],
    },
    {
      id: "1",
      stationNum: "5",
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

  const 선희누나 = {
    result_data: [
      {
        station_Num: "3호선",
        station_list: ["수서", "가락시장", "경찰병원", "오금"],
        trains: [
          {
            line_num: "3호선",
            direction: "1",
            express: "0",
            arrival_message: "2",
            cur_station: "경찰병원",
            endstation: "오금",
            msg_time: "2023-08-17 17:39:23",
            train_num: "3253",
          },
        ],
      },
      {
        station_Num: "8호선",
        station_list: ["석촌", "송파", "가락시장", "문정"],
        trains: [
          {
            line_num: "8호선",
            direction: "0",
            express: "0",
            arrival_message: "1",
            cur_station: "석촌",
            endstation: "암사",
            msg_time: "2023-08-17 17:39:30",
            train_num: "8190",
          },
          {
            line_num: "8호선",
            direction: "1",
            express: "0",
            arrival_message: "2",
            cur_station: "송파",
            endstation: "모란",
            msg_time: "2023-08-17 17:39:34",
            train_num: "8187",
          },
        ],
      },
    ],
  };

  return (
    <CardListContainer>
      {dummyList.map((card, index) => {
        return <Card {...card} key={index} />;
      })}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  margin: 10px 20px 0px;
  display: flex;
  flex-direction: column;
  align-itmes: center;
  overflow-y: scroll;
`;

export default CardList;
