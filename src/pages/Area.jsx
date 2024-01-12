import {Outlet} from "react-router-dom"
import { useSearch } from "../context/SearchMealContext"

import SearchArea from "../features/meals/SearchArea"

function Area({children}) {
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

export default Area