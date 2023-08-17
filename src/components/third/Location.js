import React from "react";
import styled from "styled-components";

const Location = (props) => {
  const dummyList = [
    {
      stationName: "남부터미널",
      statinLineList: ["3호선"],
    },
    {
      stationName: "양재",
      statinLineList: ["3호선", "신분당선"],
    },
    {
      stationName: "매봉",
      statinLineList: ["3호선"],
    },
    {
      stationName: "도곡",
      statinLineList: ["3호선", "수인분당선"],
    },
    {
      stationName: "대치",
      statinLineList: ["3호선"],
    },
    {
      stationName: "학여울",
      statinLineList: ["3호선"],
    },
    {
      stationName: "대청",
      statinLineList: ["3호선"],
    },
    {
      stationName: "일원",
      statinLineList: ["3호선"],
    },
    {
      stationName: "수서",
      statinLineList: ["3호선", "수인분당선"],
    },
    {
      stationName: "가락시장",
      statinLineList: ["3호선", "8호선"],
    },
    {
      stationName: "경찰병원",
      statinLineList: ["3호선"],
    },
    {
      stationName: "오금",
      statinLineList: ["3호선", "5호선"],
    },
  ];

  return (
    <LocationContainer>
      <LocationTitle>
        현재{" "}
        <span
          className="Line"
          style={{ color: props.lineColor, fontWeight: 500 }}
        >
          {props.data}
        </span>
        , 오금행 열차 탑승 중입니다.
      </LocationTitle>
      <BlackMask />
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
          <Line
            style={{
              height: `${dummyList.length * 56}px`,
              backgroundColor: `${props.lineColor}`,
            }}
          >
            <SubwayImage>
              <img src="images/subway-origin.png" alt="지하철 아이콘" />
            </SubwayImage>
          </Line>
        </BodyContainer>
      </ScrollContainer>
    </LocationContainer>
  );
};

const LocationContainer = styled.div`
  position: relative;
`;

const LocationTitle = styled.div`
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

const BlackMask = styled.div`
  position: absolute;
  width: 100vw;
  height: 35vh;
  top: 35px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
  box-shadow: 3px 3px 5px 5px rgba(0, 0, 0, 0.3);
`;

const ScrollContainer = styled.div`
  height: 32vh;
  margin-top: 25px;
  margin-left: 20vw;
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
  left: 3.7px;
  transform: translateY(-50%);
`;

const SubwayImage = styled.div`
  img {
    width: 33px;
    position: absolute;
    top: 40px;
    left: -12px;
    z-index: 999;
  }
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
  width: 7px;
  height: 7px;
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
