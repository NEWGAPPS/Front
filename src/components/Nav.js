import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <ul className="inner">
        <li className="logo">
          왓섭<span>?</span>
        </li>

        <li className="map">
          <a
            href="http://www.seoulmetro.co.kr/kr/cyberStation.do"
            target="_blank"
          >
            <img
              src="images/subway-white.png"
              alt="지하철 노선도 아이콘"
              className="icon"
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
    font-size: 13px;
    padding-bottom: 3px;
    border-bottom: 1px solid white;
  }
  .inner .map .icon {
    height: 11px;
    padding-right: 6px;
  }
`;
