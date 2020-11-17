import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { message, type } = props;
  return <p className={type}>{message}</p>;
};

Message.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};

Message.defaultProps = {
  message: '',
  type: '',
};

export default Message;
