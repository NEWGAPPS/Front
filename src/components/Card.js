import React from "react";
import { styled } from "styled-components";
function Card() {
  return (
    <>
      <Container>
        <div className="show">
          <h1 className="station_number">2호선</h1>
          <p className="neighbor">문래역, 영등포구청, 당산역</p>
        </div>
        <img src="/images/호선/2호선.png" alt="2호선" className="2호선" />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin: 17px auto;
  background-color: green;
  border-radius: 30px;
  width: 80vw;
  height: 19vh;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(86, 188, 50, 0.65) 0%,
    rgba(86, 188, 50, 0.1885) 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .show{
    position: absolute;
    top: 80px;
    left: 36px;
  }

  .show h1{
    font-size: 26px;
    font-weight: 500;
  }

  .show p{
    margin-top: 11px;
    font-size: 13px;
  }
  img {
    width: 26vw;
    position: absolute;
    top: 18px;
    left: 189px;
  }
`;

export default Card;
