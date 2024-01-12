import styled from "styled-components"

const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--overlay-background);
  backdrop-filter: blur(4px);
  z-index: 10000;
`

function Overlay({children}) {
  return (
    <StyledOverlay>
      {children}
    </StyledOverlay>
  )
}

export default Overlay