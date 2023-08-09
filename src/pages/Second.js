import React from "react";
import { Container } from "./First";
function Second() {
  return (
    <Container>
      <div className="inner">
        <h1 className="guide">탑승한(할) 지하철을 클릭해주세요!</h1>
        <p className="time">
          <img src="images/clock.png" alt="시계 아이콘" className="clock" />
          <span className="real_time">조회시간 13 : 50 : 27</span>
        </p>
      </div>
    </Container>
  );
}

export default Second;
