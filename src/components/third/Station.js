import React from "react";
import styled from "styled-components";

const Station = (props) => {
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

  const slicedArray = props.data.slice(0, 2);
  return (
    <>
      <TitleContainer>
        <StationTitle>이전역</StationTitle>
        <StationTitle>다음역</StationTitle>
      </TitleContainer>
      <BodyContainer>
        <NameContainer>
          {slicedArray.map((station, index) => (
            <StationInfo
              key={index}
              style={{
                borderColor: props.lineColor,
                borderWidth: `10px`,
                borderStyle: `solid`,
              }}
            >
              <StationNameKR>{station[1]}</StationNameKR>
              <StationNameEN>{station[2]}</StationNameEN>
              <StationExitInfo>
                {station[7].map((line, index) => (
                  <img
                    key={index}
                    className="exitLine"
                    src={`images/호선/${getLineNum(line)}.png`}
                    alt="호선"
                  />
                ))}
                <img
                  className="door"
                  src={
                    station[6] === 1
                      ? "images/door-right.png"
                      : "images/door-left.png"
                  }
                  alt="문 방향"
                />
              </StationExitInfo>
            </StationInfo>
          ))}
        </NameContainer>
        <Line
          style={{
            borderTopColor: props.lineColor,
            borderTopWidth: `5px`,
            borderTopStyle: `solid`,
            borderBottomColor: props.lineColor,
            borderBottomWidth: `5px`,
            borderBottomStyle: `solid`,
          }}
        />
      </BodyContainer>
    </>
  );
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 15px 0px 10px;
  width: 100%;
`;

const StationTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

const BodyContainer = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  z-index: 0;
  height: 100px;
  background: #fff;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
`;

const NameContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

const StationInfo = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  position: relative;
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const StationNameKR = styled.div`
  margin-top: 55px;
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`;

const StationNameEN = styled.div`
  margin: 6px;
  color: #8e8a8a;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
`;

const StationExitInfo = styled.div`
  .door {
    height: 25px;
    margin: -4px;
  }
  .exitLine {
    height: 25px;
  }
  display: flex;
  justify-content: center;
  gap: 3px;
  width: 70%;
  flex-wrap: wrap;
  align-items: center;
`;

export default Station;
