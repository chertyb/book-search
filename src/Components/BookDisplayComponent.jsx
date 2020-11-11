import React from 'react';
import PropTypes from 'prop-types';
import BookComponent from './BookComponent';
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
      && books.map((book) => <BookComponent data={book} key={`book-${book.id}`} />)}
    </div>
  );
};

BookDisplay.propTypes = {
  books: PropTypes.arrayOf(BookShape).isRequired,
  loadMore: PropTypes.func.isRequired,
  totalBooks: PropTypes.number.isRequired,
};

export default BookDisplay;
