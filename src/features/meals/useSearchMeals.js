import { useQuery } from "@tanstack/react-query"

import { getSearchedMeals } from "../../services/apiMeal"
import { useSearch } from "../../context/SearchMealContext";

function useSearchMeals() {
  const { searchMeal } = useSearch();
  const abortController = new AbortController();
  const { signal } = abortController;

  const {isLoading, data: meals, error, refetch, isFetching} = useQuery({
    queryKey: ["searchMeals", searchMeal],
    queryFn: () => getSearchedMeals(searchMeal, signal),
    retry: false,
    enabled: Boolean(searchMeal)
  })
  
  return { isLoading, meals, error, refetch, isFetching, abortController };

}

export default useSearchMeals