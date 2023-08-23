import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../api/bookstoreApi';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <div className="bookDesc">
      <h5>{category}</h5>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <div className="bookBtns">
        <button type="button" className="Btn" onClick={() => dispatch(removeBook(id))}>Delete</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
