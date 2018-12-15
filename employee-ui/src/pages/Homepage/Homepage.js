import React, { Component } from 'react';

import style from './Homepage.css';

import Title from '../../components/Title';
import FilterContainer from '../../containers/FilterContainer/FilterContainer';

class Homepage extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Title text="Employee Management" />
        <FilterContainer />
      </div>
    )
  }
}

export default Homepage;
