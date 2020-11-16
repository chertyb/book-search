import React from 'react';
import BookShape, { defaultBookShape } from '../Shape/BookShape';

const Book = (props) => {
  const { data } = props;

  return (
    <div className="book">
      <img src={data.thumbnail} alt="thumbnail" />
      <p title="Title">
        {'Title: '}
        {data.title}
      </p>
      <p title="Authors">
        {'Authors: '}
        {data.authors}
      </p>
      <p title="Categories">
        {'Categories: '}
        {data.categories}
      </p>
      <p title="Description">
        {'Description: '}
        {data.description}
      </p>
    </div>
  );
};

Book.propTypes = {
  data: BookShape,
};

Book.defaultProps = {
  data: defaultBookShape,
};

export default Book;
