import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { value, handleInputChange } = props;
  return <input type="text" value={value} onChange={handleInputChange} />;
};

Input.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  handleInputChange: () => {},
};

export default Input;
