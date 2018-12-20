import React, { Component } from 'react';
import { connect } from 'react-redux';

import style from './FilterContainer.css';

import { range } from '../../utils/array';

import Card from '../../components/Card';
import TextField from '../../components/TextField';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { getEmployees, resetEmployees } from '../../states/Employee/actions';

let hiringYears = [
  {
    value: 'A',
    text: 'All'
  }
];
hiringYears = hiringYears.concat(range(2000, 1985, true));

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
    const { dispatch } = this.props;

    dispatch(resetEmployees()).then(() => {
      dispatch(
        getEmployees({
          first_name: firstName ? firstName : null,
          last_name: lastName ? lastName : null,
          gender: 'A' === gender ? null : gender,
          hiring_year: 'A' === hiringYear ? null : hiringYear
        })
      );
    });
  };

  reset = () => {
    this.setState(
      {
        firstName: null,
        lastName: null,
        gender: null,
        hiringYear: null
      },
      () => {
        this.filter();
      }
    );
  };

  render() {
    const { firstName, lastName, gender, hiringYear } = this.state;

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
                value={firstName}
                onChange={this.handleChange('firstName')}
              />
            </div>
            <div className={style.column}>
              <TextField
                label="Last name"
                name="last_name"
                placeholder="Enter last name"
                tabIndex="1"
                value={lastName}
                onChange={this.handleChange('lastName')}
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
                value={gender}
                onChange={this.handleChange('gender')}
              />
            </div>
            <div className={style.column}>
              <Select
                label="Hiring year"
                name="hiring_year"
                options={hiringYears}
                tabIndex="3"
                value={hiringYear}
                onChange={this.handleChange('hiringYear')}
              />
            </div>
          </div>
          <div className={style.row}>
            <div className={style.column} />
            <div className={style.column}>
              <div className={style.buttons}>
                <Button
                  type="button"
                  buttonStyle="default"
                  onClick={this.reset}
                >
                  Reset
                </Button>
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
