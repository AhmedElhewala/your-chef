import {Outlet} from "react-router-dom"
import SearchArea from "../features/meals/SearchArea"
import { useSearch } from "../context/SearchMealContext";

function Category({children}) {
  const {searchMeal} = useSearch();

  return (
    <>
      {searchMeal ? 
        <SearchArea /> :
        <>
          {children}
          <Outlet />
        </>
      }
    </>
  )
}

export default Category