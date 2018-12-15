import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/Card';

import style from './EmployeeListContainer.css';

class EmployeeListContainer extends Component {
  renderList = employees => {
    if (employees && employees.length > 0) {
      return employees.map(employee => (
        <tr key={employee.emp_no}>
          <td className={style.text_right}>{employee.emp_no}</td>
          <td className={style.text_left}>{employee.first_name}</td>
          <td className={style.text_left}>{employee.last_name}</td>
          <td className={style.text_right}>{employee.birth_date}</td>
          <td className={style.text_left}>{employee.gender}</td>
          <td className={style.text_right}>{employee.hire_date}</td>
          <td>&nbsp;</td>
        </tr>
      ))
    }

    return (
      <tr>
        <td colSpan="6" className={style.text_center}>No employee</td>
      </tr>
    )
  }

  render() {
    const {employees} = this.props;

    return (
      <Card>
        <table className={style.table_header}>
          <colgroup>
            <col width="10%" />
            <col width="24%" />
            <col width="24%" />
            <col width="15%" />
            <col width="10%" />
            <col width="15%" />
            <col width="2%" />
          </colgroup>
          <thead>
            <tr>
              <th className={style.text_right}>No.</th>
              <th className={style.text_left}>First name</th>
              <th className={style.text_left}>Last name</th>
              <th className={style.text_right}>Birthday</th>
              <th className={style.text_left}>Gender</th>
              <th className={style.text_right}>Hiring date</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
        </table>
        <div className={style.divider} />
        <div className={style.scrollable}>
        <table className={style.table_body}>
          <colgroup>
            <col width="10%" />
            <col width="24%" />
            <col width="24%" />
            <col width="15%" />
            <col width="10%" />
            <col width="15%" />
            <col width="2%" />
          </colgroup>
          <tbody>
            {this.renderList(employees)}
          </tbody>
        </table>
        </div>
      </Card>
    )
  }
}

EmployeeListContainer.propTypes = {
  employees: PropTypes.array.isRequired,
  pagination: PropTypes.object
}

export default EmployeeListContainer;
