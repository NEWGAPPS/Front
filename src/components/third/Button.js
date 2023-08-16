import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrainSubway, faRotate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const nav = useNavigate();
  const goMain = () => nav("/");
  const goThird = () => nav("/Third");

  return (
    <ButtonContainer>
      <ResetButton onClick={goMain}>
        <ResetTitle>지하철 재설정</ResetTitle>
        <FontAwesomeIcon icon={faTrainSubway} style={{ color: `#8D8F9F` }} />
      </ResetButton>
      <RefreshButton onClick={goThird}>
        <RefreshTitle>위치 새로고침</RefreshTitle>
        <FontAwesomeIcon
          icon={faRotate}
          style={{ position: "absolute", bottom: "13px", right: "13px" }}
        />
      </RefreshButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4vw;
  margin: 30px 0px 30px;
`;

const ResetButton = styled.div`
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid rgba(123, 115, 115);
  background: #fff;
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ResetTitle = styled.div`
  color: #8d8f9f;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  line-height: 38px;
  margin-right: 10px;
`;

const RefreshButton = styled.div`
  cursor: pointer;
  border-radius: 16px;
  background: #634ceb;
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
`;

const RefreshTitle = styled.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  padding-left: 22px;
`;

export default Button;
