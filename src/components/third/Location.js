import styled from "styled-components";

const Location = (props) => {
  const getLineColor = (line) => {
    switch (line) {
      case "1":
        return "#0052A4";
      case "2":
        return "#56BC32";
      case "3":
        return "#EF7C1C";
      case "4":
        return "#00A5DE";
      case "5":
        return "#975CE2";
      case "6":
        return "#CD7C2F";
      case "7":
        return "#747F00";
      case "8":
        return "#E6186C";
      case "9":
        return "#ECB906";
      default:
        return "#FFF";
    }
  };
  const lineColor = getLineColor(props.data);

  return (
    <LocationContainer>
      <LocationTitle>
        현재{" "}
        <span class="Line" style={{ color: lineColor, fontWeight: 900 }}>
          {props.data}호선
        </span>
        , 마천행 열차 탑승 중입니다.
      </LocationTitle>
      <LocationContent>
        <img
          className="line"
          src="images/subway-line-vertical.png"
          alt="노선도"
        />
        <Station>
          <StationName>양평</StationName>
          <StationName>영등포구청</StationName>
          <StationName>영등포시장</StationName>
          <StationName>신길</StationName>
          <StationName>여의도</StationName>
        </Station>
      </LocationContent>
    </LocationContainer>
  );
};

const LocationContainer = styled.div`
`;

const LocationTitle = styled.div`
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
`;

const LocationContent = styled.div`
    height: 240px;
    margin: 30px 50px;

    .line {
        width: 10px;
        height: 240px;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Station = styled.div`
    width: 220px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`;

const StationName = styled.div`
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
`;

export default Location;
