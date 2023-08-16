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
        <ResetTitle>재설정</ResetTitle>
        <FontAwesomeIcon icon={faTrainSubway} style={{ color: `#8D8F9F` }} />
      </ResetButton>
      <RefreshButton onClick={goThird}>
        <RefreshTitle>새로고침</RefreshTitle>
        <FontAwesomeIcon icon={faRotate} />
      </RefreshButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 50px 0px;
`;

const ResetButton = styled.div`
    cursor: pointer;
    border-radius: 10px;
    background: #FFF;
    width: 120px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ResetTitle = styled.div`
    color: #8d8f9f;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 38px;
    margin-right: 10px;
`;

const RefreshButton = styled.div`
    cursor: pointer;
    border-radius: 10px;
    background: #634CEB;
    width: 120px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const RefreshTitle = styled.div`
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 38px;
    margin-right: 10px;
`;

export default Button;
