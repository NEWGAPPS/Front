import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function CardDirection({ station_num, station_list, trains }) {
  const navigate = useNavigate();
  const rightMovingList = [8, 39, 70];
  const leftMovingList = [8, 39, 70];
  const rightStaticList = [-7, 23, 53, 83];
  const leftStaticList = [-7, 23, 53, 83];
  const rightDirectionList = trains.filter(
    (train) =>
      train.direction === "1" &&
      (train.arrival_message === "0" || train.arrival_message === "3")
  );
  const rightStaticDirectionList = trains.filter(
    (train) =>
      train.direction === "1" &&
      (train.arrival_message === "1" || train.arrival_message === "2")
  );
  const leftDirectionList = trains.filter(
    (train) =>
      train.direction === "0" &&
      (train.arrival_message === "0" || train.arrival_message === "3")
  );
  const leftStaticDirectionList = trains.filter(
    (train) =>
      train.direction === "0" &&
      (train.arrival_message === "1" || train.arrival_message === "2")
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
          {rightDirectionList.map((train, index) => (
            <img
              key={index}
              onClick={() => {
                sendData();
              }}
              src={
                train.express === "0"
                  ? "images/지하철-오른쪽방향.png"
                  : "images/지하철(급행)-오른쪽.png"
              }
              alt="오른쪽 지하철"
              style={{
                position: "absolute",
                top: 0,
                left: `${
                  train.cur_station === station_list[1]
                    ? rightMovingList[0]
                    : train.cur_station === station_list[2]
                    ? rightMovingList[1]
                    : train.cur_station === station_list[3]
                    ? rightMovingList[2]
                    : ""
                }%`,
              }}
            />
          ))}
          {rightStaticDirectionList.map((train, index) => (
            <img
              key={index}
              src={
                train.express === "0"
                  ? "images/지하철-오른쪽방향.png"
                  : "images/지하철(급행)-오른쪽.png"
              }
              alt="오른쪽 지하철"
              style={{
                position: "absolute",
                top: 0,
                left: `${
                  train.cur_station === station_list[0]
                    ? rightStaticList[0]
                    : train.cur_station === station_list[1]
                    ? rightStaticList[1]
                    : train.cur_station === station_list[2]
                    ? rightStaticList[2]
                    : train.cur_station === station_list[3]
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
            style={{ backgroundColor: `var(--${station_num})` }}
          >
            {station_list.map((station, index) => {
              return (
                <div
                  className="circle"
                  style={{ border: `2px solid var(--${station_num})` }}
                  key={index}
                >
                  <li>{station}</li>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lower-subway">
          {leftDirectionList.map((train, index) => (
            <img
              key={index}
              onClick={() => {
                sendData();
              }}
              src={
                train.express === "0"
                  ? "images/지하철-왼쪽방향.png"
                  : "images/지하철(급행)-왼쪽.png"
              }
              alt="왼쪽 지하철"
              style={{
                position: "absolute",
                top: 0,
                right: `${
                  train.cur_station === station_list[2]
                    ? leftMovingList[0]
                    : train.cur_station === station_list[1]
                    ? leftMovingList[1]
                    : train.cur_station === station_list[0]
                    ? leftMovingList[2]
                    : ""
                }%`,
              }}
            />
          ))}
          {leftStaticDirectionList.map((train, index) => (
            <img
              key={index}
              onClick={() => {
                sendData();
              }}
              src={
                train.express === "0"
                  ? "images/지하철-왼쪽방향.png"
                  : "images/지하철(급행)-왼쪽.png"
              }
              alt="왼쪽 지하철"
              style={{
                position: "absolute",
                top: 0,
                right: `${
                  train.cur_station === station_list[3]
                    ? leftStaticList[0]
                    : train.cur_station === station_list[2]
                    ? leftStaticList[1]
                    : train.cur_station === station_list[1]
                    ? leftStaticList[2]
                    : train.cur_station === station_list[0]
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
