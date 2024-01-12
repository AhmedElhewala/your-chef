import {useQuery} from "@tanstack/react-query"
import { getCategoriesList } from "../../services/apiCategory";

function useCategoriesList() {
  const {isLoading, data: categories, error} = useQuery({
    queryKey: ["categoryList"],
    queryFn: getCategoriesList,
    retry: false,
})

  return {isLoading, categories, error}
}

export default useCategoriesList