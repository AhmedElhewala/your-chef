import { HiHeart } from "react-icons/hi"
import styled from "styled-components"

const StyledFooter = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  padding: 20px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-100);
  box-shadow: 0px -2px 10px 1px var(--color-grey-300);
  color: var(--color-grey-800);
  gap: 0.5rem;

  >svg {
    font-size: 1.8rem;
    color: #cd0000;
  }
`

function Footer() {
  return (
    <StyledFooter>
      &copy; 2024 Ahmed Abd El-Ghany. All rights reserved. Made with <HiHeart />
    </StyledFooter>
  )
}

export default Footer