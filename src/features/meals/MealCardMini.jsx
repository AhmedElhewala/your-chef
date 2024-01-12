import { memo, useRef, useState } from "react";
import styled from "styled-components";

import Modal from "../../ui/Modal";
import { HiBookmark } from "react-icons/hi";
import { useBookmark } from "../../context/BookmarkContext";
import useBookmarkLogic from "../../hooks/useBookmarking";
import MealCardFull from "./MealCardFull";


const StyledItem = styled.div`
position: relative;
  background-color: var(--color-grey-800);
  color: var(--color-grey-100);
  border-radius: 15px;
  box-shadow: 2px 2px 8px 4px var(--color-grey-500);
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 15px;
  transition: var(--main-transition);
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    img {
      transform: scale(1.3) rotate(10deg);
      filter: grayscale(0);
    }
  }
  &.open {
    visibility: hidden;
    pointer-events: none;
  }
`;

const ItemHeading = styled.h3`
  width: 100%;
  text-align: center;
  padding: 0 10px 20px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemImgContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ItemImg = styled.img`
  transition: var(--main-transition);
  filter: grayscale(0.4);
`;

const ItemBookMarkBtn = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--color-grey-700);
  color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 0.5rem;
  cursor: pointer;

  &.marked {
    color: #009dff;
  }

  > svg {
    font-size: 2.5rem;
  }
`

function MealCardMini({ meal }) {
  const [isOpen, setIsOpen] = useState(false);
  const { checkBookmark } = useBookmark();
  const { isMarked, handleBookmarking } = useBookmarkLogic(() => checkBookmark(meal.idMeal));

  const bookmarkRef = useRef();
  
  const { strMeal, strMealThumb, idMeal } = meal;

  const handleShowMeal = (e) => {
    if (bookmarkRef.current && !bookmarkRef.current.contains(e.target))
    setIsOpen(true);
  };

  const handleCloseMeal = () => {
    if (checkBookmark(meal.idMeal) !== isMarked) handleBookmarking();
    setIsOpen(false);
  };

  return (
    <>
      <StyledItem
        className={isOpen ? "open" : ""}
        onClick={handleShowMeal}
      >
        <ItemImgContainer>
          <ItemImg src={strMealThumb} alt={strMeal} />
        </ItemImgContainer>
        <ItemHeading>{strMeal}</ItemHeading>
        <ItemBookMarkBtn
          ref={bookmarkRef}
          className={isMarked ? "marked" : ""}
          onClick={() => handleBookmarking(idMeal)}
        >
          <HiBookmark />
        </ItemBookMarkBtn>
      </StyledItem>

      {isOpen && (
        <Modal>
          <MealCardFull id={idMeal} close={handleCloseMeal} isOpen={isOpen} />
        </Modal>
      )}
    </>
  );
}

export default memo(MealCardMini);