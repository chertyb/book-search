import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  const { message } = props;
  return <p>{message}</p>;
};

Message.propTypes = {
  message: PropTypes.string,
};

Message.defaultProps = {
  message: '',
};

export default Message;
