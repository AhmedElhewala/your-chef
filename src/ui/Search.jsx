import { useState } from "react";
import styled from "styled-components"
import { HiOutlineSearch } from "react-icons/hi";
import { useSearch } from "../context/SearchMealContext";
import useSearchMeals from "../features/meals/useSearchMeals";

const SearchContainer = styled.div`
  position: relative;
  font-size: 1.6px;
  flex-basis: 40%;
  order: 2;
  @media screen and  (max-width: 767px) {
    order: 3;
    flex-basis: 90%;
    margin: 0 auto;
  }
`

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 20px;
  background-color: #efefef;
  border-radius: 8px;
  border: none;
  transition: var(--main-transition);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  &:focus {
    transform: scaleX(1.1);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    &+svg {
      right: -1rem;
      font-size: 1.8rem;
    }
  }

&+svg {
  color: #000;
}
`
const SearchIcon = styled(HiOutlineSearch)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  font-weight: bold;
  font-size: 1.6rem;
  transition: var(--main-transition);
`

function Search() {
  const {searchMeal, setSearchMeal} = useSearch();
  const {refetch, abortController} = useSearchMeals();
  const [currentAbortController, setCurrentAbortController] = useState(null);
  

  function handleSearchChange(e) {
    setSearchMeal(e.target.value);

    if (currentAbortController) {
      currentAbortController.abort();
    }

    setCurrentAbortController(abortController);

    refetch();
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchMeal}
        placeholder="What meal you want..."
        onChange={handleSearchChange}
      />
      <SearchIcon />
    </SearchContainer>
  )
}

export default Search