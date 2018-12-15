import React, { Component } from 'react';

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

export default Button;
