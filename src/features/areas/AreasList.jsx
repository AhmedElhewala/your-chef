import styled from "styled-components"
import useAreasList from "./useAreasList"
import Spinner from "../../ui/Spinner"
import Container from "../../ui/Container"
import { NavLink } from "react-router-dom"
import Heading from "../../ui/Heading"

const StyledList = styled.section`
  padding: 40px 15px 80px;
  width: 100%;
  color: var(--color-grey-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

const StyledAreaLink = styled(NavLink)`
  background-color: var(--color-grey-600);
  padding: 12px 40px;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 2px var(--color-grey-500);
  transition: var(--main-transition);
  &:hover {
    transform: scale(1.1);
  }
  &:hover,
  &.active,
  &:active {
    background-color: var(--color-grey-800);
  }

`

function AreasList() {
  const {isLoading, areas} = useAreasList()

  if (isLoading) return <Spinner />

  return (
    <Container>
      <Heading>Areas</Heading>
      <StyledList>
        {areas.map(area => (
          <StyledAreaLink 
            to={area.strArea}
            key={area.strArea}
          >
            {area.strArea}
          </StyledAreaLink>
        ))}
      </StyledList>
    </Container>
  )
}

export default AreasList