import { PropTypes } from 'prop-types';

function Book({
  title, author, progress, chapter,
}) {
  return (
    <div className="bookDesc">
      <h3>{title}</h3>
      <h4>{author}</h4>
      <div className="bookBtns">
        <button type="button" className="Btn">Comments</button>
        <span>|</span>
        <button type="button" className="Btn">Edit</button>
        <span>|</span>
        <button type="button" className="Btn">Delete</button>
      </div>
      <div className="bookProgress">
        <div className="percentage">
          <h3>
            {progress}
            %
          </h3>
          <h4>Completed</h4>
        </div>
      </div>
      <div className="bookChapter">
        <h4>Current Chapter</h4>
        <h3>{chapter}</h3>
        <button type="button" className="Btn">Update Progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
