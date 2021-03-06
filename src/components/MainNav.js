import React from "react";
import { css } from 'styled-components'

const MainNav = ({children}) => {
  return <nav
    css={css`
      padding: 35px 40px;
      margin: 0 0 30px;
      position: relative;
      display:flex;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 70px;
      border: none;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
      z-index: 2;
      @media only screen and (max-width: 500px) {
        padding: 5px;
      }
    `}
  >{children}</nav>;
}

export default MainNav;
