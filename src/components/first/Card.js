import React from "react";
import styled from "styled-components";
import CardDirection from "./CardDirection";
function Card() {
  return (
    <CardContainer>
      <div className="title">
        <img src="images/호선/5호선.png" alt="5호선" className="train-number" />
        <span className="number">5호선</span>
      </div>
      <div className="direction_container">
        <CardDirection />
      </div>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  width: 82vw;
  margin: 17px auto 12px;
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
    width: 84vw;
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
  }
`;

export default Card;
