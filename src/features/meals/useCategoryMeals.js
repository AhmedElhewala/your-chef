import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom";

import { getCategoryMeals } from "../../services/apiMeal"

function useCategoryMeals() {
  const {category} = useParams();
  
  const {isLoading, data: meals, error} = useQuery({
    queryKey: ["categoryMeals", category],
    queryFn: () => getCategoryMeals(category),
    retry: false,
  })
  
  return {isLoading, meals, error}
}

export default useCategoryMeals