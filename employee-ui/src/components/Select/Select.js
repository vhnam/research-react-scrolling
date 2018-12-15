import React, { Component } from 'react';
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
            <select name={name} id={id} className={style.select} index={index}>
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

export default Select;
