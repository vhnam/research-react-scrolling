import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UID } from 'react-uid';

import style from './TextField.css';

class TextField extends Component {
  render() {
    const { label, name, placeholder, index } = this.props;

    return (
      <UID>
        {id => (
          <div className={style.wrapper}>
            <label htmlFor={id} className={style.label}>
              {label}
            </label>
            <input
              id={id}
              className={style.text_field}
              name={name}
              placeholder={placeholder}
              spellCheck="false"
              tabIndex={index}
            />
          </div>
        )}
      </UID>
    );
  }
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  index: PropTypes.number
}

export default TextField;
