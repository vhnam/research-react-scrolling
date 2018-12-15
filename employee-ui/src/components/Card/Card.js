import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './Card.css';

class Card extends Component {
  render() {
    const { children } = this.props;

    return <div className={style.wrapper}>{children}</div>;
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};

export default Card;
