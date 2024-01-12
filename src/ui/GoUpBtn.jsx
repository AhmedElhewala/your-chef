import styled from "styled-components"
import { HiOutlineChevronUp } from "react-icons/hi";
import { useEffect, useState } from "react";


const StyledBtn = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--color-grey-600);
  color: var(--color-grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 2rem;
  right: 0;
  box-shadow: 0 0 2px 2px var(--color-grey-200);
  transition: var(--main-transition);
  z-index: 10000000;
  cursor: pointer;

  &.show {
    right: 2rem;
  }
  
  >svg {
    font-size: 2rem;
    font-weight: bold;
  }

  &:hover {
    background-color: var(--color-grey-800);
  }
`

function GoUpBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[])

  function handleGoUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return showButton ? 
    <StyledBtn
      onClick={handleGoUp}
      className={showButton ? "show" : ""}
    >
      <HiOutlineChevronUp />
    </StyledBtn> :
    null
}

export default GoUpBtn