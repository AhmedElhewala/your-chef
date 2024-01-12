import styled from "styled-components"

import useCategoriesList from "./useCategoriesList"
import Spinner from "../../ui/Spinner";
import CategoriesListItem from "./CategoriesListItem";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";

const StyledList = styled.section`
  padding: 40px 15px 80px;
  width: 100%;
  color: var(--color-grey-100);
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: 40px;
  @media screen and (max-width: 767px){
    gap: 30px;
  }
`

function CategoriesList() {
  const {isLoading, categories} = useCategoriesList();

  if (isLoading) return <Spinner />

  return (
    <Container>
      <Heading>Categories</Heading>
      <StyledList>
        {categories.map(category => (
            <CategoriesListItem to={category.strCategory} category={category} key={category.idCategory} />
        ))}
      </StyledList>
    </Container>
  )
}

export default CategoriesList