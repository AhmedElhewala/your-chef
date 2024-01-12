import styled from "styled-components"
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

const ModeButton = styled.span`
  cursor: pointer;

  &>svg {
    font-weight: bold;
    font-size: 2rem;
    color: var(--color-grey-900);
    transition: var(--main-transition);
  }
`


function DarkMode() {
  const {isDark, toggleDarkMode} = useDarkMode()

  return (
    <ModeButton onClick={toggleDarkMode}>
      {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ModeButton>
  )
}

export default DarkMode