import { createContext, useContext, useState } from "react";

const SearchMealContext = createContext()

function SearchMealContextProvider({children}) {
  const [searchMeal, setSearchMeal] = useState("");

  return <SearchMealContext.Provider value={{searchMeal, setSearchMeal}}>
    {children}
  </SearchMealContext.Provider>
}

function useSearch () {
  const searchMealContext = useContext(SearchMealContext);
  if (searchMealContext === undefined) 
    throw new Error("There is an error in using the search meal context");
  return searchMealContext;
}

export {SearchMealContextProvider, useSearch}