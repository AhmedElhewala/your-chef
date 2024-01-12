import { Link } from "react-router-dom";
import styled from "styled-components"

const StyledItem = styled(Link)`
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  border-radius: 15px;
  box-shadow: 2px 2px 8px 4px var(--color-grey-500);
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  transition: var(--main-transition);
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    img {
      filter: grayscale(0);
    }
  }
`

const ItemHeadingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ItemImgContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  transition: var(--main-transition);
  img {
    max-width: 100%;
    transition: var(--main-transition);
    filter: grayscale(0.2);
  }
`

const ItemHeading = styled.h2`
  flex-basis: 70%;
  padding-left: 20px;
`

const ItemDetailsContainer = styled.p`
  flex: 1;
  padding: 20px;
`

function CategoriesListItem({to, category}) {
  const {strCategory, strCategoryThumb, strCategoryDescription} = category;

  return (
    <StyledItem to={to}>
      <ItemHeadingContainer>
        <ItemHeading>{strCategory}</ItemHeading>
        <ItemImgContainer>
          <img src={strCategoryThumb} alt={strCategory}/>
        </ItemImgContainer>
      </ItemHeadingContainer>
      <ItemDetailsContainer>
        {strCategoryDescription}
      </ItemDetailsContainer>
    </StyledItem>
  )
}

export default CategoriesListItem