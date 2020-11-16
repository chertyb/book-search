import PropTypes from 'prop-types';

const BookShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string,
  categories: PropTypes.string,
  description: PropTypes.string,
  thumbnail: PropTypes.string,
});

export const defaultBookShape = {
  id: '',
  title: '',
  authors: '',
  categories: '',
  description: '',
  thumbnail: '',
};

export default BookShape;
