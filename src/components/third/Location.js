import React from "react";
import styled from "styled-components";

const Location = (props) => {
  const getLineNum = (line) => {
    line = line.slice(0, 4);
    switch (line) {
      case "1001":
        return "1호선";
      case "1002":
        return "2호선";
      case "1003":
        return "3호선";
      case "1004":
        return "4호선";
      case "1005":
        return "5호선";
      case "1006":
        return "6호선";
      case "1007":
        return "7호선";
      case "1008":
        return "8호선";
      case "1009":
        return "9호선";
      case "1077":
        return "신분당선";
      case "1075":
        return "수인분당선";
      case "1063":
        return "경의중앙선";
      case "1065":
        return "공항철도";
      case "1067":
        return "경춘선";
      case "1081":
        return "경강선";
      case "1092":
        return "우이신설선";
      case "1093":
        return "서해선";
      default:
        return "";
    }
  };

  const getArriveTime = (hour, minute, second) => {
    if (second >= 30) {
      minute++;
      if (minute === 60) {
        hour++;
        minute = 0;
        if (hour === 24) hour = 0;
      }
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    return hour + ":" + minute + " ";
  };

  return (
    <LocationContainer>
      <LocationTitle>
        현재{" "}
        <span
          className="Line"
          style={{ color: props.lineColor, fontWeight: 800 }}
        >
          {props.data[0][0] === "0호선" ? "신분당선" : props.data[0][0]}
        </span>
        , {props.data[props.data.length - 1][1]}행 열차 탑승 중입니다.
      </LocationTitle>
      <BlackMask />
      <ScrollContainer>
        <BodyContainer>
          <NameContainer>
            {props.data.map((station, index) => (
              <StationList key={index}>
                <StationCircle
                  style={{
                    borderColor: props.lineColor,
                    borderWidth: `2px`,
                    borderStyle: `solid`,
                    color: `black`,
                  }}
                ></StationCircle>
                <StationInfo>{station[1]}</StationInfo>
                {station[7].map((line, index) => (
                  <img
                    key={index}
                    className="stationLine"
                    src={`images/호선/${getLineNum(line)}.png`}
                    alt="호선"
                  />
                ))}
                <ArriveTime>
                  {station[3] === -1
                    ? ""
                    : getArriveTime(station[3], station[4], station[5])}
                  {station[3] === -1 ? (
                    ""
                  ) : (
                    <span style={{ color: "#8F8A8A" }}>도착</span>
                  )}
                </ArriveTime>
              </StationList>
            ))}
          </NameContainer>
          <Line
            style={{
              height: `${props.data.length * 56}px`,
              backgroundColor: `${props.lineColor}`,
            }}
          ></Line>
          <SubwayImage></SubwayImage>
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
  width: 100%;
  height: 50vh;
  top: 35px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
`;

const ScrollContainer = styled.div`
  height: 32vh;
  margin-top: 50px;
  margin-left: 100px;
  overflow-x: hidden;
  position: relative;
`;

const BodyContainer = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  z-index: 0;
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
  position: relative;
  z-index: 1;
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

const ArriveTime = styled.div`
  margin-left: 10px;
  color: red;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default Location;
