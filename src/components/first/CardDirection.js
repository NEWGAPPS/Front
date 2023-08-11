import React from "react";
import styled from "styled-components";

function CardDirection() {
  return (
    <DirectionContainer>
      <div className="inner">
        <p className="direction_type">내선순환</p>
        <div className="neighbors">
          <ul className="upper-station">
            <li>당산역</li>
            <li>문래역</li>
          </ul>
          <img src="images/subway-line.png" alt="지하철 호선의 모습" />
          <ul className="lower-station">
            <li>합정역</li>
            <li>영등포구청</li>
            <li>신도림역</li>
          </ul>
          <img className="arrow" src="images/arrow.png" alt="화살표" />
        </div>
      </div>
    </DirectionContainer>
  );
}

const DirectionContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(86, 188, 50, 0.8) 0%,
    rgba(86, 188, 50, 0.496) 100%
  );
  border-radius: 20px;
  width: 40vw;
  box-shadow: -2px 4px 4px rgba(0, 0, 0, 0.25);
  height: 138px;
  .inner {
    margin: 0 auto;
    width: 35vw;
    margin-top: 52px;
  }
  .direction_type {
    margin-left: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  .neighbors {
    display: flex;
    flex-direction: column;
  }
  .neighbors ul {
    display: flex;
  }
  .neighbors ul li {
    font-size: 7px;
    zoom: 0.85;
    font-weight: 300;
  }
  .neighbors ul.upper-station {
    width: 78%;
    align-self: center;
    margin-top: 14px;
    justify-content: space-evenly;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .neighbors ul.upper-station li {
    text-align: center;
  }

  .neighbors ul.lower-station {
    width: 95%;
    align-self: center;
    justify-content: space-between;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
  }
  .neighbors ul.lower-station li {
    text-align: center;
  }
  .neighbors img {
    width: 90%;
    display: block;
    align-self: center;
    margin: 3px 0;
  }
  .neighbors img.arrow {
    width: 20px;
  }
`;

export default CardDirection;
