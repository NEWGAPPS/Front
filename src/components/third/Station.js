import React from "react";
import styled from "styled-components";

const Station = (props) => {
  return (
    <ScrollContainer>
      <TitleContainer>
        <StationTitle>이전역</StationTitle>
        <StationTitle>다음역</StationTitle>
        <StationTitle>다다음역</StationTitle>
        <StationTitle>다다다음역</StationTitle>
      </TitleContainer>
      <BodyContainer>
        <NameContainer>
          {props.data.map((station, index) => (
            <StationInfo key={index}>
              <StationNameKR>{station.stationNameKR}</StationNameKR>
              <StationNameEN>{station.stationNameEN}</StationNameEN>
              <StationExitInfo>
                {station.exitLineList.map((line, index) => (
                  <img
                    key={index}
                    className="exitLine"
                    src={`images/호선/${line}호선.png`}
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
        <Line />
      </BodyContainer>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  overflow-x: scroll;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0px 10px;
  width: 190vw;
`;

const StationTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 160px;
  text-align: center;
`;

const BodyContainer = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  z-index: -1;
  height: 100px;
  border-top: 5px solid #975ce2;
  border-bottom: 5px solid #975ce2;
  background: #fff;
  width: 190vw;
  top: 50%;
  transform: translateY(-50%);
`;

const NameContainer = styled.div`
  display: flex;
  width: 190vw;
  justify-content: space-around;
  align-items: center;
`;

const StationInfo = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 10px solid var(--5호선);
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StationNameKR = styled.div`
  padding-top: 24px;
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;`;

const StationNameEN = styled.div`
  margin: 9px;
  color: #8E8A8A;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
`;

const StationExitInfo = styled.div`
  .door {
      height: 20px;
      margin: 0px 5px;
    }
  .exitLine {
    height: 20px;
    margin: 0px 5px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Station;
