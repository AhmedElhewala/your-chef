import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

import { getAreaMeals } from "../../services/apiMeal"

function useAreaMeals() {
  const {area} = useParams();
  
  const {isLoading, data: meals, error} = useQuery({
    queryKey: ["areaMeals", area],
    queryFn: () => getAreaMeals(area),
    retry: false,
  })
  
  return {isLoading, meals, error}
}

export default useAreaMeals