import React from 'react';
import BookShape from '../Shape/BookShape';

const BookComponent = (props) => {
  const { data } = props;

  if (!data) {
    return null;
  }
  return (
    <div className="book">
      <img src={data.thumbnail} alt="thumbnail" />
      <p>
        {'Title: '}
        {data.title}
      </p>
      <p>
        {'Authors: '}
        {data.authors}
      </p>
      <p>
        {'Categories: '}
        {data.categories}
      </p>
      <p>
        {'Description: '}
        {data.description}
      </p>
    </div>
  );
};

BookComponent.propTypes = {
  data: BookShape.isRequired,
};

export default BookComponent;
