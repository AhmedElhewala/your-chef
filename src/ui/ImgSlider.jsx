import { useEffect, useState } from "react";
import styled from "styled-components"

const imgs = ["beef", "dessert", "lamb", "miscellaneous", "pasta", "pork", "seafood", "side", "starter", "vegan", "vegetarian"];

const ImgSliderContainer = styled.div`
  flex-basis: 30%;

  @media screen and  (max-width: 767px) {
    order: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 100%;
    filter: drop-shadow(0 0 10px var(--color-grey-500));
    transition: var(--main-transition);

    @media screen and  (max-width: 767px) {
      max-width: 80%;
    }
  }
`

function ImgSlider() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 3000)

    return () => clearInterval(intervalId);
  },[])

  return (
    <ImgSliderContainer>
      <img src={`/Dishes/${imgs[currentImgIndex]}.png`} alt={imgs[currentImgIndex]} />
    </ImgSliderContainer>
  )
}

export default ImgSlider