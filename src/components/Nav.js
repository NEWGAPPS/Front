import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <NavContainer>
      <ul className="inner">
        <a href="/" className="logo">
          왓섭<span>?</span>
        </a>

        <li className="map">
          <a
            href="http://www.seoulmetro.co.kr/kr/cyberStation.do"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="icon"
              style={{ color: "#ffffff" }}
            />
            노선도 확인
          </a>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  .inner {
    width: 80vw;
    margin: 20px auto 0px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 13px;
  }

  .inner .logo {
    font-size: 30px;
    font-weight: Bold;
    background-image: linear-gradient(#634ceb, #a974ed);
    -webkit-background-clip: text;
    color: transparent;
  }
  .inner .logo span {
    font-size: 30px;
    margin-left: 6px;
  }
  .inner .map {
    align-self: center;
    margin-top: 10px;
    font-size: 15px;
    padding-bottom: 3px;
  }
  .inner .map .icon {
    height: 15px;
    margin-right: 9px;
  }
`;
