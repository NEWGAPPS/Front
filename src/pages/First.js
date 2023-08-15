import React from "react";
import styled from "styled-components";
import CardList from "../components/first/CardList";

function First({ getTime }) {
  return (
    <>
      <GuideMessage>
        <div className="inner">
          <h1 className="guide">탑승한(할) 지하철을 클릭해주세요!</h1>
          <p className="time">
            <img src="images/clock.png" alt="시계 아이콘" className="clock" />
            <span className="real_time">{getTime()}</span>
          </p>
        </div>
      </GuideMessage>
      <CardList />
    </>
  );
}

export const GuideMessage = styled.div`
  width: 80vw;
  margin: 31px auto 6px;
  h1.guide {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
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
