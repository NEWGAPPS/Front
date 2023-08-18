import React from "react";
import Button from "../components/third/Button";
import Location from "../components/third/Location";
import Station from "../components/third/Station";
import styled from "styled-components";
import { useLocation } from "react-router";

function Third() {
  const data = useLocation();
  const resultData = data.state.data;
  const subwayObject = data.state.object;

  const getLineColor = (line) => {
    switch (line) {
      case "1호선":
        return "#0052A4";
      case "2호선":
        return "#56BC32";
      case "3호선":
        return "#EF7C1C";
      case "4호선":
        return "#00A5DE";
      case "5호선":
        return "#975CE2";
      case "6호선":
        return "#CD7C2F";
      case "7호선":
        return "#747F00";
      case "8호선":
        return "#E6186C";
      case "9호선":
        return "#C19E20";
      case "0호선":
        return "#D4003B";
      case "수인분당선":
        return "#F5A200";
      default:
        return "#634CEB";
    }
  };
  const lineColor = getLineColor(resultData[0][0]);

  return (
    <StationContainer>
      <Station data={resultData} lineColor={lineColor} />
      <Button data={resultData} object={subwayObject} />
      <Location data={resultData} lineColor={lineColor} />
    </StationContainer>
  );
}

const StationContainer = styled.div`
  height: 677px;
  @keyframes imageView {
    from {
      visibility: hidden;
    }
    to {
      visibility: visible;
    }
  }
 
`;

export default Third;
