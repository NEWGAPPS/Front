import React from "react";
import { styled } from "styled-components";
import CardContainer from "../components/CardContainer";

function First() {
  return (
    <>
      <Container>
        <div className="inner">
          <h1 className="guide">탑승한(할) 호선을 선택해주세요.</h1>
          <p className="time">
            <img src="images/clock.png" alt="시계 아이콘" className="clock" />
            <span className="real_time">조회시간 13 : 50 : 23</span>
          </p>
        </div>
      </Container>
      <CardContainer />
    </>
  );
}

export const Container = styled.div`
  width: 73vw;
  margin: 31px auto 0;
  h1.guide {
    font-size: 16px;
    font-weight: 500;
  }
  p.time {
    margin-top: 11px;
    display: flex;
    color: #b7b7b7;
    font-weight: 300;
    font-size: 11px;
  }
  p.time img {
    height: 13px;
    display: block;
  }
  p.time span {
    display: inline-block;
    align-self: center;
  }
`;

export default First;
