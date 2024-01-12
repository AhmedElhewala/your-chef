import styled from "styled-components"
import useBookmarkMeals from "../features/meals/useBookmarkMeals"
import Heading from "../ui/Heading";
import Container from "../ui/Container";
import MealCardMini from "../features/meals/MealCardMini";
import Spinner from "../ui/Spinner";
import Empty from "../ui/Empty";
import { useSearch } from "../context/SearchMealContext";
import SearchArea from "../features/meals/SearchArea";

const StyledList = styled.section`
  width: 100%;
  padding: 40px 0 80px;
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

function Bookmark() {
  const {isLoading, meals} = useBookmarkMeals();
  const {searchMeal} = useSearch();

  if (isLoading) return <Spinner />

  return (
    <>
      {searchMeal ? 
        <SearchArea /> :
        <>
          <Container>
            <Heading>Bookmarked Meals</Heading>
            {meals.length > 0 ?
              <StyledList>
                {meals.map(meal => (
                  <MealCardMini key={meal[0].idMeal} meal={meal[0]} />
                ))}
              </StyledList> :
              <Empty>You did not bookmark ant meal yet, please add some! 😃</Empty>
            }
          </Container>
        </>
      }
    </>
  )
}

export default Bookmark