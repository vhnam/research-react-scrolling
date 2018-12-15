import React, { Component } from 'react';

import Header from '../components/Header';

import style from './main.css';

class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <div className={style.wrapper}>
          {children}
        </div>
      </div>
    )
  }
}

export default MainLayout;
