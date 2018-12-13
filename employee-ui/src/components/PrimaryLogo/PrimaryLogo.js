import React, { Component } from 'react';

import style from './PrimaryLogo.css';

class PrimaryLogo extends Component {
  render() {
    return <a href="/" className={style.wrapper}>The Sadness Company</a>;
  }
}

export default PrimaryLogo;
