import React, { Component } from 'react';

import style from './Title.css';

class Title extends Component {
  render() {
    const { text } = this.props;

    return <h1 className={style.text}>{text}</h1>;
  }
}

export default Title;
