import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { text, handleClick } = props;
  return <button type="button" onClick={handleClick}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  text: '',
  handleClick: () => {},
};

export default Button;
