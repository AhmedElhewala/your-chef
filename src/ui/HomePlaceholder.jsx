import styled from "styled-components"
import { HiHeart } from "react-icons/hi";

import Container from "./Container";
import DailyMealBtn from "./DailyMealBtn";
import ImgSlider from "./ImgSlider";

const HomePlaceholderContainer = styled.main`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  padding: 60px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3rem;
  position: relative;
  color: var(--color-grey-800);

  @media screen and  (max-width: 767px) {
    flex-direction: column;
  }
`

const MainWelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4rem;
  flex: 1;

  @media screen and  (max-width: 767px) {
    order: 2;
    align-items: center;
  }
`

const MainWelcomeContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  @media screen and  (max-width: 767px) {
    align-items: center;
  }

  p {
    line-height: 1.6;
    position: relative;
    text-align: center;

    > svg {
      color: #cd0000;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: -2.5rem;
      font-size: 2rem;
    }
  }

  span {
    font-size: 1.8rem;
    font-weight: bold;
    font-style: italic;
  }
`

function HomePlaceholder() {

  return (
    <Container>
      <HomePlaceholderContainer>
        <MainWelcomeContainer>
          <MainWelcomeContainerContent>
            <p>Welocome <span>Chefs</span>! into your chef assistant.</p>
            <p>We are hear to help you with some recipes, and all you need about any meal.</p>
            <p>There is alot of meals categories, such as: <span>Beef, Chicken, Pasta,</span> and even <span>Desert</span></p>
            <p>We hope you find whatever you need <HiHeart /> </p>
          </MainWelcomeContainerContent>
          <DailyMealBtn />
        </MainWelcomeContainer>
        <ImgSlider />
      </HomePlaceholderContainer>
      
    </Container>
  )
}

export default HomePlaceholder