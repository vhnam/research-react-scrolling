import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Title.css';

class Title extends Component {
  render() {
    const { text } = this.props;

    return <h1 className={style.text}>{text}</h1>;
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired
}

export default Title;
