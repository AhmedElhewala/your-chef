import styled from "styled-components"
import {useParams} from "react-router-dom"
import useAreaMeals from "./useAreaMeals";
import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import MealCardMini from "./MealCardMini";
import Spinner from "../../ui/Spinner";

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

function AreaMealList() {
  const {area} = useParams()
  const {isLoading, meals} = useAreaMeals();

  if (isLoading) return <Spinner />

  return (
    <Container>
      <Heading>{`${area} Meals`}</Heading>
      <StyledList>
        {meals.map(meal => (
          <MealCardMini key={meal.idMeal} meal={meal} />
        ))}
      </StyledList>
    </Container>
  )
}

export default AreaMealList