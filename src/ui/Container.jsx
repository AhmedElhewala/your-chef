import styled from "styled-components"

const StyledContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

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

function Container({children}) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container