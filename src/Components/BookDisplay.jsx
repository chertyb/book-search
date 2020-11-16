import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import BookShape from '../Shape/BookShape';

const BookDisplay = (props) => {
  const { books, totalBooks, loadMore } = props;

  const handleScroll = (e) => {
    const divBottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (divBottom && books.length < totalBooks) {
      loadMore(false);
    }
  };

  return (
    <div id="book-display" onScroll={handleScroll}>
      {books
      && books.map((book) => <Book data={book} key={`book-${book.id}`} />)}
    </div>
  );
};

BookDisplay.propTypes = {
  books: PropTypes.arrayOf(BookShape),
  loadMore: PropTypes.func,
  totalBooks: PropTypes.number,
};

BookDisplay.defaultProps = {
  books: [],
  loadMore: () => {},
  totalBooks: 0,
};

export default BookDisplay;
