import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function CardDirection({ stationNum, stationList, subwayList }) {
  const navigate = useNavigate();
  const rightMovingList = [5, 37, 69];
  const leftMovingList = [10, 38, 72];
  const rightStaticList = [-5, 20, 53, 78];
  const leftStaticList = [-5, 23, 53, 82];
  const rightDirectionList = subwayList.filter(
    (subway) => subway.way === "right" && subway.state === "진행중"
  );
  const rightStaticDirectionList = subwayList.filter(
    (subway) => subway.way === "right" && subway.state === "정차"
  );
  const leftDirectionList = subwayList.filter(
    (subway) => subway.way === "left" && subway.state === "진행중"
  );

  const leftStaticDirectionList = subwayList.filter(
    (subway) => subway.way === "left" && subway.state === "정차"
  );

  const sendData = async () => {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts");
      navigate("/Third");
    } catch (err) {
      alert(`데이터 전송 오류 발생!${err}`);
    }
  };

  return (
    <DirectionContainer>
      <div className="star-container"></div>{" "}
      {/* 작은 점들로 구성된 별을 담을 컨테이너 */}
      <div className="container">
        <div className="upper-subway">
          {rightDirectionList.map((subway, index) => (
            <img
              key={subway.id}
              onClick={() => {
                sendData();
              }}
              src={
                subway.type === "일반"
                  ? "images/지하철-오른쪽방향.png"
                  : "images/지하철(급행)-오른쪽.png"
              }
              alt="오른쪽 지하철"
              style={{
                position: "absolute",
                top: 0,
                left: `${
                  subway.before === stationList[0]
                    ? rightMovingList[0]
                    : subway.before === stationList[1]
                    ? rightMovingList[1]
                    : subway.before === stationList[2]
                    ? rightMovingList[2]
                    : ""
                }%`,
              }}
            />
          ))}
          {rightStaticDirectionList.map((subway, index) => (
            <img
              key={subway.id}
              src={
                subway.type === "일반"
                  ? "images/지하철-오른쪽방향.png"
                  : "images/지하철(급행)-오른쪽.png"
              }
              alt="오른쪽 지하철"
              style={{
                position: "absolute",
                top: 0,
                left: `${
                  subway.before === stationList[0]
                    ? rightStaticList[0]
                    : subway.before === stationList[1]
                    ? rightStaticList[1]
                    : subway.before === stationList[2]
                    ? rightStaticList[2]
                    : subway.before === stationList[3]
                    ? rightStaticList[3]
                    : ""
                }%`,
              }}
              onClick={() => {
                sendData();
              }}
            />
          ))}
        </div>
        <div className="station_list">
          <div
            className="line"
            style={{ backgroundColor: `var(--${stationNum}호선)` }}
          >
            {stationList.map((station, index) => {
              return (
                <div
                  className="circle"
                  style={{ border: `2px solid var(--${stationNum}호선)` }}
                  key={index}
                >
                  <li>{station}</li>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lower-subway">
          {leftDirectionList.map((subway, index) => (
            <img
              key={subway.id}
              onClick={() => {
                sendData();
              }}
              src={
                subway.type === "일반"
                  ? "images/지하철-왼쪽방향.png"
                  : "images/지하철(급행)-왼쪽.png"
              }
              alt="왼쪽 지하철"
              style={{
                position: "absolute",
                top: 0,
                right: `${
                  subway.before === stationList[3]
                    ? leftMovingList[0]
                    : subway.before === stationList[2]
                    ? leftMovingList[1]
                    : subway.before === stationList[1]
                    ? leftMovingList[2]
                    : ""
                }%`,
              }}
            />
          ))}
          {leftStaticDirectionList.map((subway, index) => (
            <img
              key={subway.id}
              onClick={() => {
                sendData();
              }}
              src={
                subway.type === "일반"
                  ? "images/지하철-왼쪽방향.png"
                  : "images/지하철(급행)-왼쪽.png"
              }
              alt="왼쪽 지하철"
              style={{
                position: "absolute",
                top: 0,
                right: `${
                  subway.before === stationList[3]
                    ? leftStaticList[0]
                    : subway.before === stationList[2]
                    ? leftStaticList[1]
                    : subway.before === stationList[1]
                    ? leftStaticList[2]
                    : subway.before === stationList[0]
                    ? leftStaticList[3]
                    : ""
                }%`,
              }}
            />
          ))}
        </div>
      </div>
    </DirectionContainer>
  );
}

const DirectionContainer = styled.div`
  background-color: #160c23;
  border-radius: 15px;
  width: 100%;
  position: relative;
  overflow: hidden;
  .star {
    width: 1px;
    height: 1px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
  }

  height: 135px;
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
    height: 28px;
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.4s;
    animation: scale 0.4s ease-in-out alternate infinite;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }

  img:hover {
    transform: scale(1.2) translateX(3px);
  }

  .lower-subway {
    width: 86%;
    position: relative;
    display: flex;
    height: 28px;
    margin: 30px auto 0;
  }
  .lower-subway img {
    width: 58px;
    position: absolute;
    top: 0;
    right: 0;
    transition: 0.4s;
    animation: scale 0.4s ease-in-out alternate infinite;
  }

  .station_list {
    margin: 0 auto;
    width: 87%;
    height: 2px;
  }

  .station_list .line {
    width: 92%;
    height: 3px;
    background-color: var(--5호선);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
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
    font-size: 13px;
    text-align: center;
    height: 20px;
    top: 15px;
    left: -30px;
  }
`;

export default React.memo(CardDirection);
