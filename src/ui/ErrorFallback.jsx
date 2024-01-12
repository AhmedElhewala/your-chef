import styled from "styled-components"
import GlobalStyles from "../styles/GlobalStyles"

import { HiOutlineExclamation, HiOutlineArrowSmLeft } from "react-icons/hi";

const StyledFallback = styled.div`
  width: 100%;
  height: 100%;
`

const FallbackContainer = styled.div`
  width: 100%;
  color: var(--color-grey-900);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
`


const StyledExclamationIcon = styled(HiOutlineExclamation)`
  font-weight: bold;
  font-size: 6rem;
`

const ErrorMsgContainer = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

const ErrorMsg = styled.p`
  margin: 0;
`

const ErrorLink = styled.button`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 5px;
  padding: 10px 50px;
  background-color: var(--color-grey-900);
  color: var(--color-grey-0);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 2px 5px 1px var(--color-grey-700);
  transition: var(--main-transition);
  &:hover {
    transform: scale(1.05);
  }
  &>span {
    transition: var(--main-transition);
  }
`

const StyledHomeIcon = styled(HiOutlineArrowSmLeft )`
  transition: var(--main-transition);
  font-weight: bold;
  font-size: 1.8rem;
`

function ErrorFallback({resetErrorBoundary}) {
  return (
    <>
      <GlobalStyles />
      <StyledFallback>
        <FallbackContainer>
          <StyledExclamationIcon />
          <ErrorMsgContainer>
            <ErrorMsg>
              Oh, There is an error occurs at this moment
            </ErrorMsg>
            <ErrorMsg>
              Please! Go Back and try again 😃
            </ErrorMsg>
            <ErrorLink 
              onClick={resetErrorBoundary}
            >
              <StyledHomeIcon />
              <span>Back</span>
            </ErrorLink>
          </ErrorMsgContainer>
        </FallbackContainer>
      </StyledFallback>
    </>
  )
}

export default ErrorFallback