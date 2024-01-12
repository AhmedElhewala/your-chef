import {useQuery} from "@tanstack/react-query"
import { getAreasList } from "../../services/apiArea"


function useAreasList() {
  const {isLoading, data: areas, error} = useQuery({
    queryKey: ["areaList"],
    queryFn: getAreasList,
    retry: false,
})

  return {isLoading, areas, error}
}

export default useAreasList