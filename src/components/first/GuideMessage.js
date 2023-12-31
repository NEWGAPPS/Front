import React from "react";
import styled from "styled-components";
function GuideMessage({ getTime }) {
  return (
    <GuideContainer>
      <div className="inner">
        <h1 className="guide">탑승할(한) 지하철을 클릭해주세요!</h1>
        <p className="time">
          <img src="images/clock.png" alt="시계 아이콘" className="clock" />
          <span className="real_time">{getTime()}</span>
        </p>
      </div>
    </GuideContainer>
  );
}

const GuideContainer = styled.div`
  width: 80%;
  margin: 31px auto 6px;
  h1.guide {
    font-size: 18px;
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

export default GuideMessage;
