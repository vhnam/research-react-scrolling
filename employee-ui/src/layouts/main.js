import React, { Component } from 'react';

import Header from '../components/Header';

class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        {children}
      </div>
    )
  }
}

export default MainLayout;
