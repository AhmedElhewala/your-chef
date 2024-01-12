import { useState } from "react";
import {useLocation} from "react-router-dom"
import { useBookmark } from "../context/BookmarkContext";
import useBookmarkMeals from "../features/Meals/useBookmarkMeals";

function useBookmarkLogic(marked) {
  const [isMarked, setIsMarked] = useState(marked);
  const {addBookmark, removeBookmark} = useBookmark();
  const {refresh} = useBookmarkMeals()
  const location = useLocation();
  const bookmarkPath = location.pathname;

  const handleBookmarking = (id) => {
    if (bookmarkPath === "bookmark") refresh();
    isMarked ? removeBookmark(id) : addBookmark(id);
    setIsMarked((isMarked) => !isMarked);
  };

  return { isMarked, handleBookmarking };
}

export default useBookmarkLogic;
