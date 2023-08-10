import React from "react";
import { styled } from "styled-components";
function Card() {
  return (
    <Container>
      <div className="title">
        <img src="images/호선/2호선.png" alt="2호선" className="train-number" />
        <span className="number">2호선</span>
      </div>
      <div className="direction_container">
        <Direction>
          <div className="inner">
            <div className="direction_type">내선순환</div>
          </div>
        </Direction>
        <Direction>
          <div className="inner">
            <p className="direction_type">내선순환</p>
          </div>
        </Direction>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 82vw;
  margin: 17px auto 0;
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

const Direction = styled.div`
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
`;

export default Card;
