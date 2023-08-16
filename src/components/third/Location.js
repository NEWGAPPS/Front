import React from "react";
import styled from "styled-components";

const Location = (props) => {
  const dummyList = [
    {
      stationName: "남부터미널",
      statinLineList: ["3"],
    },
    {
      stationName: "양재",
      statinLineList: ["3", "신분당"],
    },
    {
      stationName: "매봉",
      statinLineList: ["3"],
    },
    {
      stationName: "도곡",
      statinLineList: ["3", "수인분당"],
    },
    {
      stationName: "대치",
      statinLineList: ["3"],
    },
    {
      stationName: "학여울",
      statinLineList: ["3"],
    },
    {
      stationName: "대청",
      statinLineList: ["3"],
    },
    {
      stationName: "일원",
      statinLineList: ["3"],
    },
    {
      stationName: "수서",
      statinLineList: ["3", "수인분당"],
    },
    {
      stationName: "가락시장",
      statinLineList: ["3", "8"],
    },
    {
      stationName: "경찰병원",
      statinLineList: ["3"],
    },
    {
      stationName: "오금",
      statinLineList: ["3", "5"],
    },
  ];

  return (
    <LocationContainer>
      <LocationTitle>
        현재{" "}
        <span
          className="Line"
          style={{ color: props.lineColor, fontWeight: 900 }}
        >
          {props.data}호선
        </span>
        , 마천행 열차 탑승 중입니다.
      </LocationTitle>
      <ScrollContainer>
        <BodyContainer>
          <NameContainer>
            {dummyList.map((station, index) => (
              <StationList key={index}>
                <StationCircle
                  style={{
                    borderColor: props.lineColor,
                    borderWidth: `2px`,
                    borderStyle: `solid`,
                    color: `black`,
                  }}
                ></StationCircle>
                <StationInfo>{station.stationName}</StationInfo>
                {station.statinLineList.map((line, index) => (
                  <img
                    key={index}
                    className="stationLine"
                    src={`images/호선/${line}.png`}
                    alt="호선"
                  />
                ))}
              </StationList>
            ))}
          </NameContainer>
          <Line style={{ height: `${dummyList.length * 6.5}vh` }} />
        </BodyContainer>
      </ScrollContainer>
    </LocationContainer>
  );
};

const LocationContainer = styled.div`
`;

const LocationTitle = styled.div`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`;

const ScrollContainer = styled.div`
    height: 250px;
    margin: 25px 50px;
    overflow-x: hidden;
    position: relative;
`;

const BodyContainer = styled.div`
    position: relative;
`;

const Line = styled.div`
    position: absolute;
    z-index: -1;
    background: #fff;
    width: 4px;
    top: 50%;
    left: 4.5px;
    transform: translateY(-50%);
`;

const NameContainer = styled.div`
    width: 190vw;
`;

const StationList = styled.div`
    display: flex;
    align-items: center;

    .stationLine {
        width: 20px;
        height: 20px;
        margin: 3px;
    }
`;

const StationCircle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    text-align: center;
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
`;

const StationInfo = styled.div`
    margin: 20px 10px 20px 40px;
`;

export default Location;
