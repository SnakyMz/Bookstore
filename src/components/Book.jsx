import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../api/bookstoreApi';
import progImg from '../images/progressImg.png';

function Book({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  return (
    <div className="bookDesc">
      <h5 className="cate">{category}</h5>
      <h3 className="titl">{title}</h3>
      <h4 className="auth">{author}</h4>
      <div className="bookBtns">
        <button type="button" className="Btn">Comments</button>
        <span className="bar">|</span>
        <button type="button" className="Btn">Edit</button>
        <span className="bar">|</span>
        <button type="button" className="Btn" onClick={() => dispatch(removeBook(id))}>Delete</button>
      </div>
      <div className="bookProgress">
        <img src={progImg} alt="Progress" className="progImg" />
        <div className="percentage">
          <h3 className="perc">64%</h3>
          <h6 className="completed">Completed</h6>
        </div>
      </div>
      <div className="bookChapter">
        <h5 className="curChapter">Current Chapter</h5>
        <h4 className="Chapter">Chapter 1</h4>
        <button type="button" className="updateBtn">UPDATE PROGRESS</button>
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
