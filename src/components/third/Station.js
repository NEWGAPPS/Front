import React from "react";
import styled from "styled-components";

const Station = (props) => {
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
              <StationNameKR>{station.stationNameKR}</StationNameKR>
              <StationNameEN>{station.stationNameEN}</StationNameEN>
              <StationExitInfo>
                {station.exitLineList.map((line, index) => (
                  <img
                    key={index}
                    className="exitLine"
                    src={`images/호선/${line}.png`}
                    alt="호선"
                  />
                ))}
                <img
                  className="door"
                  src={
                    station.exitDoor === "right"
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
  margin: 30px 0px 10px;
  width: 100vw;
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
  z-index: -1;
  height: 100px;
  background: #fff;
  width: 100vw;
  top: 50%;
  transform: translateY(-50%);
`;

const NameContainer = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
`;

const StationInfo = styled.div`
  width: 40vw;
  height: 40vw;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StationNameKR = styled.div`
  margin-top: 14vw;
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
  gap: 1vw;
  width: 80px;
  flex-wrap: wrap;
  align-items: center;
`;

export default Station;
