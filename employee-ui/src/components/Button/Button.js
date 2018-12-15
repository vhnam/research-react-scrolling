import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Button.css';

const classnames = require('classnames/bind');

const cx = classnames.bind(style);

class Button extends Component {
  render() {
    const { type, children, onClick, buttonStyle } = this.props;

    return (
      <button
        type={type}
        className={cx('wrapper', buttonStyle)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  buttonStyle: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
