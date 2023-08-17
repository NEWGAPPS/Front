import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Foooter>
      <FooterConatiner>
        <FontAwesomeIcon icon={faCircleQuestion} size="xs" />
        <FooterTitle>탑승 중인 지하철 운행 정보를 알아내는 방식</FooterTitle>
      </FooterConatiner>
      <FooterContent>
        사용자의 위치와 가장 가까운 역들의 실시간 지하철 운행 정보를 조회하고,
        탑승한 지하철을 선택하면 해당 지하철 ID의 실시간 운행 정보를 제시합니다.
      </FooterContent>
      <FooterCopyRight>© 2023 NEWGAPPS. All Rights Reserved.</FooterCopyRight>
    </Foooter>
  );
};

const Foooter = styled.div`
  width: 100vw;
  background-color: #231b2d;
  padding-bottom: 10px;
  margin-top: 30px; 
`;

const FooterConatiner = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 40px 10px 40px;
`;
const FooterTitle = styled.div`
  height: 13px;
  margin-left: 10px;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const FooterContent = styled.div`
  height: 39px;
  margin: 0px 40px;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.5;
`;

const FooterCopyRight = styled.div`
  color: #8f8a8a;
  text-align: center;
  font-size: 9px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export default Footer;
