import styled from "styled-components";

import {LoaderAnimation, PanAnimation, ShadowAnimation} from "../styles/Animations"
import Overlay from "./Overlay";
import { createPortal } from "react-dom";

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  z-index: 100000;
`;

const PanLoader = styled.div`
  width: 180px;
  height: 180px;
  margin: 100px auto;
`

const Loader = styled.div`
  position: relative;
  top: 10%;
  left: 0;
  z-index: -1;
  width: 60%;
  height: 45%;
  border: 10px solid transparent;
  border-bottom: 10px solid #fdd835;
  border-radius: 50%;
  animation: ${LoaderAnimation} 2s infinite;
  animation-timing-function: linear;
`

const PanContainer = styled.div`
  display: flex;
  width: 100%;
  animation: ${PanAnimation} 2s infinite;
`

const Pan = styled.div`
  width: 60%;
  height: 20px;
  background: linear-gradient(#3949ab, #5c6bc0);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`

const Handle = styled.div`
  width: 40%;
  height: 10px;
  background: linear-gradient(#3949ab, #5c6bc0);
  border-radius: 10px;
`

const Shadow = styled.div`
  position: relative;
  top: 15%;
  left: 15%;
  width: 30%;
  height: 8px;
  background: lightgray;
  border-radius: 20px;
  animation: ${ShadowAnimation} 2s infinite;
`

const StyledMsgContainer = styled.p`
  color: var(--color-grey-800);
  font-size: 1.8rem;
  font-weight: bold;
  @media screen and (max-width: 767px){
    padding: 0 30px;
  }
`

function Spinner() {

  return (
    createPortal(
      <Overlay>
        <SpinnerContainer>
          <PanLoader>
            <Loader />
            <PanContainer>
              <Pan />
              <Handle />
            </PanContainer>
            <Shadow />
          </PanLoader>
          <StyledMsgContainer>
            The meal is cocking, now! Please wait while loading ... 
          </StyledMsgContainer>
      </SpinnerContainer>
      </Overlay>,
      document.body
    )
  );
}

export default Spinner;
