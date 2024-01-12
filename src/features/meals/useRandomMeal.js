import { useQuery } from "@tanstack/react-query"

import { getRandomMeal } from "../../services/apiMeal"

function useRandomMeal() {
  const {isLoading, data: meal, error, refetch, isRefetching} = useQuery({
    queryKey: ["randomMeal"],
    queryFn: () => getRandomMeal(),
    retry: false,
    enabled: false
  })

  
  return {isLoading, meal, error, refetch, isRefetching}
}

export default useRandomMeal