import styled from "styled-components"

import Logo from "./Logo"
import Search from "./Search"
import Nav from "./Nav"
import DarkMode from "./DarkMode"
import BookmarkBtn from "./BookmarkBtn"

const StyledHeader = styled.header`
  width: 100%;
  padding: 15px;
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--color-grey-100);
  box-shadow: 0px 2px 10px 1px var(--color-grey-300);
  z-index: 1000;
`

const HeaderContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;

  @media screen and (max-width: 480px) {
    max-width: 460px;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    max-width: 570px;
  }

  @media (min-width: 601px) and (max-width: 767px) {
    max-width: 750px;
  }

  @media (min-width: 768) and (max-width: 991px) {
    max-width: 970px;
  }

  @media (min-width: 992px) and (max-width: 1119px) {
    max-width: 1170px;
  }

  @media(min-width: 1200px) {
    max-width: 1170px;
  }
`

const NavContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: right;
  order: 3;
  @media screen and (max-width: 767px) {
    order: 2;
  }
`

function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Search />
        <NavContainer>
          <Nav />
          <DarkMode />
          <BookmarkBtn />
        </NavContainer>
      </HeaderContainer>
    </StyledHeader>
  )
}

export default Header