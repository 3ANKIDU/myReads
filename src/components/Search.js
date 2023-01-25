import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI';
import Book from "./Book";
import useDebounce from "./useDebounce";
import propTypes from 'prop-types'

const Search = ({updateBook}) => {
  const [query, setQuery] = useState('');
  const [searchResultes, setSearchResultes] = useState([]);
  const [message, setMessage] = useState('');

  const debounceValue = useDebounce(query, 500)
  const inputHandle = event => {
    setQuery(event.target.value);
  }

  useEffect(async() => {
    const searchFilter = async() => {
      const respond = await BooksAPI.search(query, 15)
        .then(async res => {
          const markedBooks = await BooksAPI.getAll(); 
          const respond = res.map(book => {
          const found = markedBooks.find(b => b.id === book.id)
            if(found !== undefined)
              book.shelf = found.shelf
            else
              book.shelf = 'moveTo'
            return book
            })
          return respond
        })
        .catch(err => {
          setMessage(`there's no resultes`)
          return []
        })
      return respond
    } 
    if (query === '') {
      setSearchResultes([])
    }
    else{
        setSearchResultes(await searchFilter())
    }
  }, [debounceValue])

  useEffect(() => {
    if (searchResultes.length !== 0)
      setMessage('')
  }, [debounceValue])

  return  <div className="search-books">
    <div className="search-books-bar">

      <Link to='/' className="close-search" >Close</Link>

      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={query}
          onChange={inputHandle}
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
    <div className="search-books-results">
     {query !== '' && <p>{message}</p> }
     {searchResultes.length >= 1 ? <ol className="books-grid">
        {
          searchResultes.map(book => {
            return <li key={book.id}>{
              <Book book={book} updateBook={updateBook} />
            }</li>
          })
        }
      </ol> : ''}
  </div>
  </div>
}

Search.propTypes= {
  updateBook: propTypes.func.isRequired
}
export default Search;