import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BookmarkMealsContext = createContext();

function BookmarkProvider ({children}) {
  const [bookmarkedMeals, setBookmarkedMeals] = useLocalStorage([], "bookmarks");

  function addBookmark(id) {
    (id) && setBookmarkedMeals([...bookmarkedMeals, id]);
  }

  function removeBookmark(id) {
    setBookmarkedMeals((prevBookmarkedMeals) =>
      prevBookmarkedMeals.filter((bookmark) => +bookmark !== +id)
    );
  }

  function checkBookmark(id) {
    return bookmarkedMeals?.includes(id);
  }

  const getBookmarksCount = bookmarkedMeals.length;

  return <BookmarkMealsContext.Provider value={{bookmarkedMeals, addBookmark, removeBookmark, checkBookmark, getBookmarksCount}}>
    {children}
  </BookmarkMealsContext.Provider>
}

function useBookmark() {
  const bookmarkContext = useContext(BookmarkMealsContext);
  if (bookmarkContext === undefined) 
    throw new Error("There is an error in using the bookmark context");
  return bookmarkContext;
}


export {BookmarkProvider, useBookmark}