import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Spinner from "../../ui/Spinner"
import useCertainMeal from "./useCertainMeal"
import { extractIngredientsAndMeasures } from "../../utilities/helper"
import YouTubeVideo from "../../ui/YouTubeVideo"
import useModalEffects from "../../hooks/useModalEffects"
import { HiBookmark } from "react-icons/hi";
import { useBookmark } from "../../context/BookmarkContext"
import useBookmarkLogic from "../../hooks/useBookmarking"


const CardContainer = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  box-shadow: 2px 2px 10px 4px var(--color-grey-600);
  color: var(--color-grey-100);
  transition: var(--main-transition);
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 85%;
    height: 85vh;
    max-height: 100%;
    flex-direction: column;
  }
`

const ImgContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  transition: var(--main-transition);

  img {
    height: 100%;
    object-fit: cover;
    transition: var(--main-transition);
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`

const ItemBookMarkBtn = styled.div`
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 10vh;
  right: 10%;
  background-color: var(--color-grey-800);
  color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  box-shadow: -1px -1px 5px 2px var(--color-grey-400);
  cursor: pointer;
  
  @media screen and (max-width: 767px) {
    bottom: 7.5vh;
    right: 7.5%;
    border-top-left-radius: 1.5rem;
    z-index: 100;
  }

  &.marked {
    color: #009dff;
  }

  > svg {
    font-size: 3rem;
  }
`

const CardMealDetailsContainer = styled.div`
  flex-basis: 70%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--color-grey-800);
  padding-bottom: 20px;
  @media screen and (max-width: 767px) {
    width: 100%;
    flex-basis: 100%;
    height: 100%;
  }
`

const CardDetailsTabContainer = styled.div`
  display: flex;
  align-items: center;
`

const CardDetailsTab = styled.span`
  background-color: var(--color-grey-600);
  flex: 1;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: var(--main-transition);
  box-shadow: 0 2px 5px 1px var(--color-grey-500);
  &.open {
    box-shadow: 0 2px 5px 2px var(--color-grey-600);
    background-color: inherit;
  }
`

const CardDetailsContentContainer = styled.div`
  padding: 0 20px;
  flex: 1;
  height: 100%;
  overflow: hidden;

  >div {
    overflow: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
    &::-webkit-scrollbar-horizontal {
      height: 0;
    }
  }
`

const CardMealDetailsHeading = styled.h2`
  
`

const CardMealDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

const CardMealLinkTags = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const CardMealLink = styled(Link)`
  padding: 8px 40px;
  background-color: var(--color-grey-100);
  color: var(--color-grey-900);
  border-radius: 8px;
  box-shadow: 0 2px 5px 1px var(--color-grey-200);
  font-weight: bold;
  transition: var(--main-transition);
  &:hover {
    transform: scale(1.1);
  }
`

const CardMealInstructionsContainer = styled.div`
  height: 100%;
`

const CardMealInstructions = styled.p`
  line-height: 1.6;
`

const CardMealIngredientsContainer = styled.div`
  height: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  justify-content: center;
  gap: 15px;
  overflow: auto;
`

const CardMealIngredientBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 10px;
  box-shadow: 0 2px 10px 1px var(--color-grey-400);
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

const CardMealIngredientMeasure = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`

const CardMealIngredient = styled.span`
  font-size: 1.6rem;
`

const CardCloseButton = styled.div`
  font-weight: bold;
  position: absolute;
  top: calc(10vh - 1.5rem);
  right: calc(10% - 1.5rem);
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cd0000;
  color: #efefef;
  cursor: pointer;
  box-shadow: #680000 0px 50px 100px -20px, #680000 0px 30px 60px -30px, #680000 0px -2px 6px 0px inset;

  @media screen and (max-width: 767px) {
    top: calc(7.5vh - 1.5rem);
    right: calc(7.5% - 1.5rem);
  }
`

const tabs = ["About", "Ingredients", "Instructions"];

function MealCardFull({id, close, isOpen}) {
  const {isLoading, meal} = useCertainMeal(id);
  const [openTab, setOpenTab] = useState("about");
  const { checkBookmark } = useBookmark();
  const { isMarked, handleBookmarking } = useBookmarkLogic(() => checkBookmark(id));
  
  const modalRef = useRef();

  useModalEffects(modalRef, isOpen, close);

  if (isLoading || meal.length === 0) return <Spinner />

  const {strMeal, strCategory, strArea, strInstructions, strMealThumb, strYoutube} = meal[0];

  const handleToggleTab = (tab) => {
    setOpenTab(tab)
  }
  
  const strYoutubeId =strYoutube.split("v=")[1]
  const ingredients = extractIngredientsAndMeasures(meal[0]);

  return (
    <CardContainer ref={modalRef}>
      
      <ImgContainer>
        <img src={strMealThumb} alt={strMeal} />
      </ImgContainer>
      <CardMealDetailsContainer>
        <CardDetailsTabContainer>
          {tabs.map(tab => (
            <CardDetailsTab 
              key={tab}
              onClick={() => handleToggleTab(tab.toLowerCase())}
              className={openTab === tab.toLowerCase() ? "open" : ""}
            >
              {tab}
            </CardDetailsTab>
          ))}
        </CardDetailsTabContainer>
        <CardDetailsContentContainer>
          {openTab === "about" && 
            <CardMealDetails>
              <CardMealDetailsHeading>{strMeal}</CardMealDetailsHeading>
              <YouTubeVideo 
                videoId={strYoutubeId}
              />
              <CardMealLinkTags>
                <CardMealLink
                  to={`/category/${strCategory}`}
                  onClick={close}
                >
                  {strCategory}
                </CardMealLink>
                <CardMealLink
                  to={`/area/${strArea}`}
                  onClick={close}
                >
                  {strArea}
                </CardMealLink>
              </CardMealLinkTags>
            </CardMealDetails>
          }
          {openTab === "instructions" && 
            <CardMealInstructionsContainer>
              <CardMealInstructions>{strInstructions}</CardMealInstructions>
            </CardMealInstructionsContainer>
          }
          {openTab === "ingredients" && 
            <CardMealIngredientsContainer>
              {ingredients.map(ingredient => (
                // const {strIngredient, strMeasure} = ingredient;
                <CardMealIngredientBox key={ingredient.strIngredient}>
                  <CardMealIngredientMeasure>{ingredient.strMeasure}</CardMealIngredientMeasure>
                  <CardMealIngredient>{ingredient.strIngredient}</CardMealIngredient>
                </CardMealIngredientBox>
              ))}
            </CardMealIngredientsContainer>
          }
        </CardDetailsContentContainer>
      </CardMealDetailsContainer>
      <ItemBookMarkBtn
        className={isMarked ? "marked" : ""}
        onClick={() => handleBookmarking(id)}
      >
        <HiBookmark />
      </ItemBookMarkBtn>
      <CardCloseButton onClick={close}>x</CardCloseButton>
    </CardContainer>
  )
}

export default MealCardFull