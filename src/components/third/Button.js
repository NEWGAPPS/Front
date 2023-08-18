import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrainSubway, faRotate } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Button = (props) => {
  console.log(props.object);
  const nav = useNavigate();
  const goMain = () => nav("/");
  const sendData = async () => {
    try {
      const URL = `https://port-0-back-eu1k2llldu9vju.sel3.cloudtype.app/api/directions/`;
      const response = await axios.post(URL, props.object);
      console.log(response);
      nav("/Third", { state: { data: response.data, object: props.object } });
    } catch (err) {
      alert(`데이터 전송 오류 발생!${err}`);
    }
  };

  return (
    <ButtonContainer>
      <ResetButton onClick={goMain}>
        <ResetTitle>지하철 재설정</ResetTitle>
        <FontAwesomeIcon icon={faTrainSubway} style={{ color: `#8D8F9F` }} />
      </ResetButton>
      <RefreshButton onClick={sendData}>
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
  gap: 20px;
  margin: 20px 0px 30px;
`;

const ResetButton = styled.div`
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid rgba(123, 115, 115);
  background: #fff;
  width: 130px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
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
  height: 44px;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
`;

const RefreshTitle = styled.div`
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  padding-left: 22px;
`;

export default Button;
