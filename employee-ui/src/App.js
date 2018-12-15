import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
