import React from "react";
import styled from "styled-components";
import CardDirection from "./CardDirection";
function Card(prop) {
  return (
    <CardContainer>
      <div className="title">
        <img
          src={`images/호선/${prop.stationNum}호선.png`}
          alt={`${prop.stationNum}호선 사진`}
          className="train-number"
        />
        <span className="number">{prop.stationNum}호선</span>
      </div>
      <div className="direction_container">
        <CardDirection {...prop} />
      </div>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  width: 88vw;
  margin: 17px auto 30px;
  .title {
    font-size: 26px;
    display: flex;
  }
  .title img {
    margin-left: 5px;
    width: 24px;
    display: block;
    height: 24px;
    align-self: flex-end;
  }
  .title span {
    display: block;
    margin-left: 6px;
    font-size: 26px;
    font-weight: 500;
    font-family: Montserrat;
  }
  .direction_container {
    width: 88vw;
    display: flex;
    justify-content: space-between;
    margin: 14px auto;
  }
`;

export default Card;
