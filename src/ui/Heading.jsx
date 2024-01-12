import styled from "styled-components"

const StyledHeading = styled.h2`
  display: block;
  margin: 60px 0;
  position: relative;
  text-align: center;
  &::before {
    content: "";
    width: 30%;
    height: 2px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-grey-800);
    border-radius: 2px;
    @media screen and (max-width: 767px) {
      width: 60%;
    }
  }
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    bottom: -34px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-grey-800);
    border-radius: 50%;
  }
`

function Heading({children}) {
  return (
    <StyledHeading>
      {children}
    </StyledHeading>
  )
}

export default Heading