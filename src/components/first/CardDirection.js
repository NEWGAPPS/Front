import React from "react";
import styled from "styled-components";

function CardDirection() {
  return (
    <DirectionContainer>
      <div className="container">
        <div className="upper-subway">
          <img src="/images/지하철-오른쪽방향.png" alt="오른쪽 지하철" />
        </div>
        <div className="station_list">
          {/* 호선마다 색깔 달라져야되고, 역명도 props으로 전달되서 있어야함 */}
          <div className="line">
            <div className="circle">
              <li>신길</li>
            </div>
            <div className="circle">
              <li>영등포시장</li>
            </div>
            <div className="circle">
              <li>영등포구청</li>
            </div>
            <div className="circle">
              <li>양평</li>
            </div>
          </div>
        </div>
        <div className="lower-subway">
          <img src="/images/지하철-왼쪽방향.png" alt="왼쪽 지하철" />
        </div>
      </div>
    </DirectionContainer>
  );
}

const DirectionContainer = styled.div`
  background-color: #160c23;
  border-radius: 15px;
  width: 100%;
  height: 150px;
  .container {
    margin: 0 auto;
  }
  .upper-subway {
    display: flex;
    position: relative;
    width: 86%;
    margin: 20px auto 10px;
    height: 28px;
  }
  .upper-subway img {
    width: 58px;
    position: absolute;
    top: 0;
    left: 150px;
  }

  .lower-subway {
    width: 86%;
    display: flex;
    margin: 30px auto 0;
  }
  .lower-subway img {
    width: 58px;
  }

  .station_list {
    margin: 0 auto;
    width: 87%;
    height: 2px;
  }

  .station_list .line {
    width: 96%;
    height: 2px;
    background-color: var(--5호선);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .station_list .line .circle {
    width: 7px;
    height: 7px;
    background-color: white;
    border-radius: 7px;
    border: 2px solid var(--5호선);
    position: relative;
  }
  .station_list .line .circle li {
    position: absolute;
    width: 60px;
    font-size: 10px;
    text-align: center;
    height: 20px;
    top: 12px;
    left: -30px;
  }
`;

export default CardDirection;
