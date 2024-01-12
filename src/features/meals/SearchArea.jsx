import styled from "styled-components"
import { useSearch } from "../../context/SearchMealContext";
import Spinner from "../../ui/Spinner";
import useSearchMeals from "./useSearchMeals";
import Heading from "../../ui/Heading"
import MealCardMini from "./MealCardMini";
import Empty from "../../ui/Empty"

const StyledList = styled.section`
  width: 100%;
  padding: 40px 15px 80px;
  gap: 40px;
  color: var(--color-grey-0);
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  @media screen and (max-width: 767px){
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }
`

function SearchArea() {
  const {searchMeal} = useSearch();
  const {isLoading, meals, isFetching} = useSearchMeals();

  if (isLoading && !isFetching) return <Spinner />

  return (
    <>
      <Heading>Result about: {searchMeal}</Heading>
      {searchMeal && 
        (meals ?
          <StyledList>
            {meals && (
              meals.map(meal => (
                <MealCardMini key={meal.idMeal} meal={meal} />
              )
            ))}
          </StyledList> : (
            meals === null ?
              <Empty >There is now meals with {searchMeal}, please enter a valid name</Empty> :
              <Empty >Your search result about {searchMeal} is cooking now, please wait!</Empty>
          )
        )
      }
    </>
  )
}

export default SearchArea