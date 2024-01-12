import { Link } from 'react-router-dom'
import styled from "styled-components"
import { useDarkMode } from "../context/DarkModeContext";

import logoLightPath from "/brand-logo-light.png";
import logoDarkPath from "/brand-logo-dark.png";

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: bold;
  color: var(--color-grey-900);
  order: 1;
  >span {
    display: inline-block;
    @media screen and (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
`

const LogoImg = styled.img`
  display: block;
  max-width: 3.6rem;
  transition: var(--main-transition);
  @media screen and (max-width: 767px) {
    max-width: 3rem;
  }
`

function Logo() {
  const {isDark} = useDarkMode();

  return (
    <LogoContainer to="/">
      <LogoImg src={isDark ? logoDarkPath : logoLightPath} alt="Your Chef Logo" />
      <span>Your Chef</span>
    </LogoContainer>
  )
}

export default Logo;