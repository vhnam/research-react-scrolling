import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout;
