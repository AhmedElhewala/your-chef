import styled from "styled-components"
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import useLocalStorageWithExpiry from "../hooks/useLocalStorageWithExpiry";
import { DAILY_EXPIRY } from "../utilities/constants";
import useRandomMeal from "../features/meals/useRandomMeal";
import Modal from "./Modal";
import MealCardFull from "../features/meals/MealCardFull";

const StyledDailyBtn = styled.button`
  padding: 12px 40px;
  background-color: var(--color-grey-600);
  color: var(--color-grey-100);
  box-shadow: 0 2px 5px 1px var(--color-grey-500);
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: var(--main-transition);
  word-spacing: 0.2rem;

  &:hover {
    background-color: var(--color-grey-800);
    transform: scale(1.1);
  }
`

function DailyMealBtn() {
  const [storedMeal, setStoredMeal] = useLocalStorageWithExpiry({}, "dailyMeal", DAILY_EXPIRY);
  const [isOpen, setIsOpen] = useState(false);
  let {isLoading, meal, refetch} = useRandomMeal();

  if (!meal && storedMeal.length > 0) meal = storedMeal;

  useEffect(() => {
    if (meal) setStoredMeal(meal);
  }, [meal, setStoredMeal])

  if (isLoading) return <Spinner />

  function handlePickUpClick() {
    refetch();
    handleOpenMeal();
  }

  function handleOpenMeal() {
    setIsOpen(true);
  }

  function handleCloseMeal() {
    setIsOpen(false);
  }


  return (
    <>
      {(storedMeal && storedMeal?.length > 0 ) ?
        (<StyledDailyBtn
          onClick={handleOpenMeal}
        >
          {`Show Your Today's Special Meal`}
        </StyledDailyBtn>) :
        (<StyledDailyBtn
          onClick={handlePickUpClick}
        >
          {`Pick Up A Special Meal For Today`}
        </StyledDailyBtn>)
      }
      {isOpen && meal && (
        <Modal>
          <MealCardFull id={meal[0].idMeal} close={handleCloseMeal} isOpen={isOpen} />
        </Modal>
      )}
    </>
  )

}

export default DailyMealBtn