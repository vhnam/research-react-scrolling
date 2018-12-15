import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MainLayout from './layouts/main';

import Homepage from './pages/Homepage';

class App extends Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <MainLayout>
          <Homepage />
        </MainLayout>
      </Provider>
    );
  }
}

export default App;
