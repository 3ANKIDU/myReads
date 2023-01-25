import { Link } from "react-router-dom";
import propTypes from 'prop-types'
import BookShelf from "./BookShelf"
const Home = ({books, updateBook}) => {
    return  <div className="app">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <BookShelf books={books} updateBook={updateBook}/>
      <div className="open-search">
        <Link to='/search'>Add a book </Link>
      </div>
    </div>
</div>
}

Home.propTypes= {
  books: propTypes.array.isRequired,
  updateBook: propTypes.func.isRequired
}

export default Home;