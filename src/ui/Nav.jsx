import { NavLink, useLocation } from "react-router-dom"
import styled from "styled-components"

const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  
`

const NavListLink = styled(NavLink)`
  color: var(--color-grey-600);
  font-size: 1.6rem;
  transition: var(--main-transition);
  
  &.active,
  &:hover {
    color: var(--color-grey-900);
  }

  &.active {
    font-weight: bold;
  }

  &:disabled {
    cursor: not-allowed;
  }

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`

function Nav() {
  const location = useLocation()

  return (
    <StyledNav>
      <li>
        <NavListLink to="/category" disabled={location.pathname === "/category"}>Categories</NavListLink>
      </li>
      <li>
        <NavListLink to="/area" disabled={location.pathname === "/area"}>Areas</NavListLink>
      </li>
    </StyledNav>
  )
}

export default Nav