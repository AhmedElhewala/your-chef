import styled from "styled-components"
import { Link } from "react-router-dom"
import { HiBookmark } from "react-icons/hi"
import { useBookmark } from "../context/BookmarkContext"

const StyledBookmarkButton = styled(Link)`
  position: relative;
  cursor: pointer;

  &>svg {
    font-weight: bold;
    font-size: 2rem;
    color: var(--color-grey-900);
    transition: var(--main-transition);
  }
`

const BookmarksCount = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: absolute;
  top: -0.8rem;
  right: -0.8rem;
  background-color: #cd0000;
  color: #efefef;
  font-size: 1.2rem;
`

function BookmarkBtn() {
  const {getBookmarksCount} = useBookmark();

  return (
    <StyledBookmarkButton to="/bookmark">
      {getBookmarksCount > 0 && <BookmarksCount>{getBookmarksCount}</BookmarksCount>}
      <HiBookmark />
    </StyledBookmarkButton>
  )
}

export default BookmarkBtn