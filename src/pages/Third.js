import React from "react";
import Button from "../components/third/Button";
import Location from "../components/third/Location";
import Station from "../components/third/Station";
import styled from "styled-components";

function Third() {
  const dummyList = {
    stationNum: "3",
    stationInfoList: [
      {
        stationNameKR: "남부터미널",
        stationNameEN: "Nambu Bus Terminal",
        exitLineList: ["3"],
        exitDoor: "right",
      },
      {
        stationNameKR: "양재",
        stationNameEN: "Yangjae",
        exitLineList: ["3", "신분당"],
        exitDoor: "right",
      },
      {
        stationNameKR: "매봉",
        stationNameEN: "Maebong",
        exitLineList: ["3"],
        exitDoor: "right",
      },
      {
        stationNameKR: "도곡",
        stationNameEN: "Dogok",
        exitLineList: ["3", "수인분당"],
        exitDoor: "right",
      },
    ],
    // subwayInfo: {
    //   id: 3028,
    //   way: "right",
    //   type: "일반",
    //   state: "진행중",
    //   before: "영등포구청",
    //   after: "영등포시장",
    // },
  };

  const getLineColor = (line) => {
    switch (line) {
      case "1":
        return "#0052A4";
      case "2":
        return "#56BC32";
      case "3":
        return "#EF7C1C";
      case "4":
        return "#00A5DE";
      case "5":
        return "#975CE2";
      case "6":
        return "#CD7C2F";
      case "7":
        return "#747F00";
      case "8":
        return "#E6186C";
      case "9":
        return "#C19E20";
      case "신분당":
        return "#D4003B";
      case "수인분당":
        return "#F5A200";
      default:
        return "#634CEB";
    }
  };
  const lineColor = getLineColor(dummyList.stationNum);

  return (
    <StationContainer>
      <Station data={dummyList.stationInfoList} lineColor={lineColor} />
      <Button />
      <Location data={dummyList.stationNum} lineColor={lineColor} />
    </StationContainer>
  );
}

const StationContainer = styled.div`
  height: 677px;
`;

export default Third;
