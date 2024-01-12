import { useQuery } from "@tanstack/react-query"

import { getBookmarkedMeals } from "../../services/apiMeal"
import { useBookmark } from "../../context/BookmarkContext";

function useBookmarkMeals() {
  const {bookmarkedMeals} = useBookmark();

  const {isLoading, data: meals, error, refetch, isFetching} = useQuery({
    queryKey: ["bookmarkMeals", bookmarkedMeals],
    queryFn: () => getBookmarkedMeals(),
    retry: false,
  })

  return {isLoading, meals, error, refetch, isFetching}
}

export default useBookmarkMeals