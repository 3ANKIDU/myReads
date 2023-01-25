import propTypes from 'prop-types'

const ShelfChanger = ({ shelf, updateShelf}) => {

    return  <div className="book-shelf-changer">
    <select value={shelf} onChange={event => updateShelf(event.target.value)}>
      <option value='moveTo'>
        Move to...
      </option>
      <option value="currentlyReading">
        Currently Reading
      </option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
}

ShelfChanger.propTypes= {
  shelf: propTypes.string.isRequired,
  updateShelf: propTypes.func.isRequired
}
export default ShelfChanger;