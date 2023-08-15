import React from "react";
import Button from "../components/third/Button";
import Location from "../components/third/Location";
import Station from "../components/third/Station";
import styled from "styled-components";

const dummyList = {
  stationNum: "5",
  stationInfoList: [
    {
      stationNameKR: "영등포구청",
      stationNameEN: "Yeongdeungpo-gu Office",
      exitLineList: ["2", "5"],
      exitDoor: "right",
    },
    {
      stationNameKR: "영등포시장",
      stationNameEN: "Yeongdeungpo Market",
      exitLineList: ["5"],
      exitDoor: "right",
    },
    {
      stationNameKR: "신길",
      stationNameEN: "Singil",
      exitLineList: ["1", "5"],
      exitDoor: "right",
    },
    {
      stationNameKR: "여의도",
      stationNameEN: "Yeouido",
      exitLineList: ["5", "9"],
      exitDoor: "right",
    },
  ],
  subwayInfo: {
    id: 3028,
    way: "right",
    type: "일반",
    state: "진행중",
    before: "영등포구청",
    after: "영등포시장",
  },
};

function Third() {
  return (
    <StationContainer>
      <Station data={dummyList.stationInfoList} />
      <Button />
      <Location data={dummyList.stationNum} />
    </StationContainer>
  );
}

const StationContainer = styled.div`
  height: 677px;
`;

export default Third;
