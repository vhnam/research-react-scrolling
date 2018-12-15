import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/Card';

import style from './EmployeeListContainer.css';

class EmployeeListContainer extends Component {
  renderList = employees => {
    if (employees && employees.length > 0) {
      return (
        <tr>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
          <td>&nbsp;</td>
        </tr>
      )
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
            <col width="25%" />
            <col width="25%" />
            <col width="15%" />
            <col width="10%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th className={style.text_right}>No.</th>
              <th>First name</th>
              <th>Last name</th>
              <th className={style.text_right}>Birthday</th>
              <th>Gender</th>
              <th className={style.text_right}>Hiring date</th>
            </tr>
          </thead>
        </table>
        <div className={style.divider} />
        <div className={style.scrollable}>
        <table className={style.table_body}>
          <colgroup>
            <col width="10%" />
            <col width="25%" />
            <col width="25%" />
            <col width="15%" />
            <col width="10%" />
            <col width="15%" />
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
  employees: PropTypes.array.isRequired
}

export default EmployeeListContainer;
