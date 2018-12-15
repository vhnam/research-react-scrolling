import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './Homepage.css';

import Title from '../../components/Title';
import FilterContainer from '../../containers/FilterContainer';
import EmployeeListContainer from '../../containers/EmployeeListContainer';

class Homepage extends Component {
  render() {
    const { employees, pagination } = this.props;

    return (
      <div className={style.wrapper}>
        <Title text="Employee Management" />
        <FilterContainer />
        <div className={style.divider} />
        <EmployeeListContainer employees={employees} pagination={pagination} />
      </div>
    );
  }
}

EmployeeListContainer.propTypes = {
  employees: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

const connectToRedux = connect(state => ({
  employees: state.homepage.employees,
  pagination: state.homepage.pagination
}));

export default connectToRedux(Homepage);
