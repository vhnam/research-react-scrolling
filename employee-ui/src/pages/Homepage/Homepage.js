import React, { Component } from 'react';

import style from './Homepage.css';

import Title from '../../components/Title';
import FilterContainer from '../../containers/FilterContainer';
import EmployeeListContainer from '../../containers/EmployeeListContainer';

class Homepage extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Title text="Employee Management" />
        <FilterContainer />
        <div className={style.divider} />
        <EmployeeListContainer />
      </div>
    );
  }
}

export default Homepage;
