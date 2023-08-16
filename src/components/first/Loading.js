import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <>
      <LoadingContainer>
        <img
          className="logo"
          src="images/loading-logo.png"
          alt="로딩 로고 이미지"
        />
        <p>지하철 정보를 가져오는 중입니다...</p>
        <div className="subway-animation">
          <img
            src="images/지하철-오른쪽방향.png"
            alt="로딩되고 있는 지하철 이미지"
            className="right"
          />
          <img
            src="images/지하철-왼쪽방향.png"
            alt="로딩되고 있는 지하철 이미지"
            className="left"
          />
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
      </LoadingContainer>
    </>
  );
}

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img.logo {
    display: block;
    margin-bottom: 10px;
    padding-left: 20px;
    width: 50vw;
  }

  p {
    font-weight: 300;
    color: white;
  }

  .subway-animation {
    margin-top: 30px;
    display: flex;
    position: relative;
    padding-top: 28px;
  }
  .subway-animation .line {
    height: 3.4px;
    width: 55vw;
    align-self: center;
    background-color: #634ceb;
  }
  .subway-animation .circle {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: white;
    border: 2.4px solid #634ceb;
  }
  .subway-animation img {
    position: absolute;
    width: 58px;
  }
  .subway-animation img.right {
    top: -3px;
    left: 0;
    animation-name: moving-right;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
  .subway-animation img.left {
    top: 50px;
    right: 0;
    animation-name: moving-left;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }

  @keyframes moving-right {
    0% {
      left: 0vw;
    }

    100% {
      left: 40vw;
    }
  }
  @keyframes moving-left {
    0% {
      right: 0vw;
    }
    100% {
      right: 40vw;
    }
  }
`;

export default Loading;
