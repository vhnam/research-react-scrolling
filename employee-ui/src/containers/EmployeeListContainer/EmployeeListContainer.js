import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Card from '../../components/Card';

import style from './EmployeeListContainer.css';

import { getEmployees } from '../../states/Employee/actions';

class EmployeeListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      prevY: 0
    };
  }

  componentDidMount() {
    // Options
    let options = {
      root: null, // Page as root
      rootMargin: '0px',
      threshold: 1.0
    };

    // Create an observer
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this), //callback
      options
    );

    //Observ the `loadingRef`
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;

    if (this.state.prevY > y) {
      this.getEmployees();
    }

    this.setState({ prevY: y });
  }

  getEmployees = () => {
    const { current_page, last_page, credentials } = this.props.pagination;

    if (current_page <= last_page) {
      let _credentials = credentials;
      _credentials.page = parseInt(current_page) + 1;

      // this.setState({ isLoading: true });

      this.props.dispatch(getEmployees(_credentials)).then(() => {
        // this.setState({ isLoading: false });z
      });
    }
  };

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
      ));
    }

    return (
      <tr>
        <td colSpan="7" className={style.text_center}>
          No employee
        </td>
      </tr>
    );
  };

  render() {
    const { employees } = this.props;

    const loadingTextCSS = { display: this.state.isLoading ? 'block' : 'none' };

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
            <tbody>{this.renderList(employees)}</tbody>
          </table>
          <div
            ref={loadingRef => (this.loadingRef = loadingRef)}
            className={style.loader}
          >
            <span style={loadingTextCSS}>Loading...</span>
          </div>
        </div>
      </Card>
    );
  }
}

EmployeeListContainer.propTypes = {
  employees: PropTypes.array.isRequired,
  pagination: PropTypes.object
};

const connectToRedux = connect(state => ({
  pagination: state.homepage.pagination
}));

export default connectToRedux(EmployeeListContainer);
