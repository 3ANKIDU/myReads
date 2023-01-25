import Book from './Book'
import propTypes from 'prop-types'
const BookShelf = ({books , updateBook}) => {


    let shelfName;
    const shelfNames = ['Currently Reading', 'Want to Read', 'Read'];
    const nameHandle = (name) => {
        if(name === shelfNames[0])
            return 'currentlyReading'
        if(name === shelfNames[1])
            return 'wantToRead'
        else
            return 'read'
    }
    return  <div className="list-books-content">
        <div>{
            shelfNames.map((name) => {
                shelfName = nameHandle(name)
                return <div className="bookshelf" key={name}>
                    <h2 className="bookshelf-title">{name}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">{
                            books.filter((book) => book.shelf === shelfName)
                            .map((book) => <li key={book.id}>{
                                <Book book={book}  updateBook={updateBook}/>
                                }</li>)
                        }</ol>
                    </div>
                </div>
            })
        }</div>
  </div>
}

BookShelf.propTypes= {
    books: propTypes.array.isRequired,
    updateBook: propTypes.func.isRequired
}
export default BookShelf;