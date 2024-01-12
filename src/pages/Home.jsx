import styled from "styled-components"

import Container from "../ui/Container"
import HomePlaceholder from "../ui/HomePlaceholder"
import { useSearch } from "../context/SearchMealContext"
import SearchArea from "../features/meals/SearchArea"

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 20px 0;
`

function Home() {
  const {searchMeal} = useSearch()

  return (
    <MainContainer>
      <Container>
        {searchMeal ? <SearchArea /> : <HomePlaceholder />}
      </Container>
    </MainContainer>
  )
}

export default Home