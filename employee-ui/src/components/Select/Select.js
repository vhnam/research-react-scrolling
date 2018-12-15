import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UID } from 'react-uid';

import style from './Select.css';

class Select extends Component {
  render() {
    const { options, name, label, index } = this.props;

    return (
      <UID>
        {id => (
          <div>
            <label htmlFor={id} className={style.label}>
              {label}
            </label>
            <select name={name} id={id} className={style.select} tabIndex={index}>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        )}
      </UID>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  index: PropTypes.number,
  name: PropTypes.string
}

export default Select;
