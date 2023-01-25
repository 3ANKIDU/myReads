import ShelfChanger from "./ShelfChanger";
import propTypes from 'prop-types'
const Book = ({book, updateBook}) => {
  const imageLinks = book.imageLinks === undefined ? true : false
  const smallThumbnail =  imageLinks === true ? '' : book.imageLinks.smallThumbnail 
  const shelf = book.shelf === undefined ? 'moveTo' : book.shelf;
  const updateShelf = (newShelf) => {
    updateBook(book, newShelf)
  }
  return  <div className="book">
  <div className="book-top">
    <div
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage:
          `url(${smallThumbnail})`,
      }}
    ></div>
    <ShelfChanger shelf={shelf} updateShelf={updateShelf}/>
  </div>
  <div className="book-title">{book.title}</div>
  <div className="book-authors">
    {book.authors === undefined ? '' : book.authors.join()}
  </div>
</div>
}

Book.propTypes = {
  book: propTypes.object.isRequired,
  updateBook: propTypes.func.isRequired
}

export default Book;