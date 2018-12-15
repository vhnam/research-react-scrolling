import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './FilterContainer.css';

import { range } from '../../utils/array';

import Card from '../../components/Card';
import TextField from '../../components/TextField';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { getEmployees } from '../../states/Employee/actions';

let hiringYears = range(1985, 2000);
hiringYears.push({
  value: null,
  text: 'All'
});

const genders = [
  { value: 'A', text: 'All' },
  { value: 'M', text: 'Male' },
  { value: 'F', text: 'Female' }
];

class FilterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      gender: null,
      hiringYear: null
    };

    this.filter();
  }

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  filter = () => {
    const { firstName, lastName, gender, hiringYear } = this.state;

    this.props.dispatch(
      getEmployees({
        first_name: firstName,
        last_name: lastName,
        gender: 'A' === gender ? null : gender,
        hiring_year: hiringYear
      })
    );
  };

  render() {
    return (
      <Card>
        <div className={style.wrapper}>
          <div className={style.row}>
            <div className={style.column}>
              <TextField
                label="First name"
                name="first_name"
                placeholder="Enter first name"
                tabIndex="0"
                onChange={this.handleChange('firstName')}
              />
            </div>
            <div className={style.column}>
              <TextField
                label="Last name"
                name="last_name"
                placeholder="Enter last name"
                tabIndex="1"
                onChange={this.handleChange('lasttName')}
              />
            </div>
          </div>
          <div className={style.row}>
            <div className={style.column}>
              <Select
                label="Gender"
                name="gender"
                options={genders}
                tabIndex="2"
                onChange={this.handleChange('gender')}
              />
            </div>
            <div className={style.column}>
              <Select
                label="Hiring year"
                name="hiring_year"
                options={hiringYears}
                tabIndex="3"
                onChange={this.handleChange('hiringYear')}
              />
            </div>
          </div>
          <div className={style.row}>
            <div className={style.column} />
            <div className={style.column}>
              <div className={style.btn_search}>
                <Button
                  type="button"
                  buttonStyle="primary"
                  onClick={this.filter}
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

const connectToRedux = connect(state => ({
  employees: state.homepage.employees
}));

export default connectToRedux(FilterContainer);
