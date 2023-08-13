import styled from "styled-components";

const Station = () => {
  return (
    <StationContainer>
      <ScrollContainer>
        <TitleContainer>
          <StationTitle>이전역</StationTitle>
          <StationTitle>다음역</StationTitle>
          <StationTitle>다다음역</StationTitle>
          <StationTitle>다다다음역</StationTitle>
        </TitleContainer>
        <BodyContainer>
          <NameContainer>
            <StationInfo>
              <StationName>영등포구청</StationName>
            </StationInfo>
            <StationInfo>
              <StationName>영등포시장</StationName>
            </StationInfo>
            <StationInfo>
              <StationName>영등포구청</StationName>
            </StationInfo>
            <StationInfo>
              <StationName>영등포구청</StationName>
            </StationInfo>
          </NameContainer>
          <Line />
        </BodyContainer>
      </ScrollContainer>
    </StationContainer>
  );
};

const StationContainer = styled.div`
  height: 677px;
`;

const ScrollContainer = styled.div`
  overflow-x: scroll;
  position: relative;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0px 10px;
  width: 190vw;
`;

const StationTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 160px;
  text-align: center;
`;

const BodyContainer = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  z-index: -1; /* 다른 컴포넌트 뒤로 숨기기 위해 음수 값을 사용 */
  height: 100px;
  border-top: 5px solid #975ce2;
  border-bottom: 5px solid #975ce2;
  background: #fff;
  width: 190vw;
  top: 50%;
  transform: translateY(-50%);
`;

const NameContainer = styled.div`
  display: flex;
  width: 190vw;
  justify-content: space-around;
  align-items: center;
`;

const StationInfo = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 10px solid var(--5호선);
  background: #fff;
  color: black;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StationName = styled.div``;

export default Station;
