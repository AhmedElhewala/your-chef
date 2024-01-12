import styled from "styled-components"

const StyledEmptyContainer = styled.div`
  width: 100%;
  padding: 20px;
  font-weight: bold;
  text-align: center;
  color: var(--color-grey-800);
`

function Empty({children}) {
  return (
    <StyledEmptyContainer>
      {children}
    </StyledEmptyContainer>
  )
}

export default Empty