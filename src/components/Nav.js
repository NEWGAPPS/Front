import React from "react";
import { styled } from "styled-components";

function Nav() {
  return (
    <NavContainer>
      <ul className="inner">
        <li className="logo">
          왓섭 <span>?</span>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  .inner {
    width: 60vw;
    margin: 20px 37px 0px;
    display: flex;
    justify-content: space-between;
  }

  .inner .logo {
    font-size: 30px;
    font-weight: Bold;
    background-image: linear-gradient(#634ceb, #a974ed);
    -webkit-background-clip: text;
    color: transparent;
  }
`;
