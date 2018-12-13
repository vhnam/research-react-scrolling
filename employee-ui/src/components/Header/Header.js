import React, { Component } from 'react';

import PrimaryLogo from '../PrimaryLogo';

import style from './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className={style.wrapper}>
        <div className={style.container}>
          <PrimaryLogo />
        </div>
      </nav>
    );
  }
}

export default Header;
