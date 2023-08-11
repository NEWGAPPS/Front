import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <FooterConatiner>
        <FontAwesomeIcon icon={faCircleQuestion} />
        <FooterTitle>탑승 중인 지하철 운행 정보를 알아내는 방식</FooterTitle>
      </FooterConatiner>
      <FooterContent>
        탑승 중인 호선을 설정하면, 사용자의 위치와 가장 가까운 역의 실시간
        지하철 운행 정보를 통해 사용자가 탑승한 지하철의 운행 정보를 알아냅니다.
      </FooterContent>
      <FooterCopyRight>© 2023 NEWGAPPS. All Rights Reserved.</FooterCopyRight>
    </>
  );
};

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
    margin: 0px 40px 20px 40px;
    font-size: 9px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

const FooterCopyRight = styled.div`
    color: #8F8A8A;
    text-align: center;
    font-size: 9px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export default Footer;
