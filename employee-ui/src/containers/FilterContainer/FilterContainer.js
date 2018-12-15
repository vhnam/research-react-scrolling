import React, { Component } from 'react';

import style from './FilterContainer.css';

import { range } from '../../utils/array';

import Card from '../../components/Card';
import TextField from '../../components/TextField';
import Select from '../../components/Select';
import Button from '../../components/Button';

const hiringYears = range(1985, 2000);
const genders = [{ value: 'M', text: 'Male' }, { value: 'F', text: 'Female' }];

class FilterContainer extends Component {

  search = () => {
    console.log('ahihi');
  }

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
              />
            </div>
            <div className={style.column}>
              <TextField
                label="Last name"
                name="last_name"
                placeholder="Enter last name"
                tabIndex="1"
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
              />
            </div>
            <div className={style.column}>
              <Select
                label="Hiring year"
                name="hiring_year"
                options={hiringYears}
                tabIndex="3"
              />
            </div>
          </div>
          <div className={style.row}>
            <div className={style.column}></div>
            <div className={style.column}>
              <div className={style.btn_search}>
                <Button type="button" text="Search" buttonStyle="primary" onClick={this.search} />
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default FilterContainer;
