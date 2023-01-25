import "./App.css";
import { useEffect, useState } from "react";
import * as BooksAPI from './BooksAPI'
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Search from "./components/Search";
function App() {
  const [books, setBooks] = useState([]);
  const [changed, setChanged] = useState(false);

  const getBooks = async () => { 
    setBooks(await BooksAPI.getAll())
  }

  const updateBook = (theBook, newShelf) => {
    BooksAPI.update(theBook, newShelf)
    setChanged(!changed);
    getBooks()
  }

  useEffect(() => {
    getBooks();
  }, [changed]);


  // useEffect(() => {
  //   getBooks();
  // }, []);

  return (
    <Routes>
      <Route exact path="/" element={<Home books={books} updateBook={updateBook} />} />
      <Route exact path="/search" element={<Search updateBook={updateBook} />} />
      <Route path='*' element={
        <>
          <h2>error 404</h2>
          <p>page not found</p>
          <p>click {
          <Link to='/'>Here</Link>
        }to return to the home page</p>
        </>
      } />
    </Routes>
  )
}

export default App;
