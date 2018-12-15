import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Button.css';

const classnames = require('classnames/bind');

const cx = classnames.bind(style);

class Button extends Component {
  render() {
    const { type, text, onClick, buttonStyle } = this.props;

    return (
      <button
        type={type}
        className={cx('wrapper', buttonStyle)}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
