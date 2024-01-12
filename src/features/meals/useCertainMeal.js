import { useQuery } from "@tanstack/react-query"

import { getCertainMeal } from "../../services/apiMeal"

function useCertainMeal(id) {
  const {isLoading, data: meal, error} = useQuery({
    queryKey: ["categoryMeals"],
    queryFn: () => getCertainMeal(id),
    retry: false,
  })
  
  return {isLoading, meal, error}
}

export default useCertainMeal