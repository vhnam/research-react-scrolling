import React, { Component } from 'react';

import style from './Card.css';

class Card extends Component {
  render() {
    const { children } = this.props;

    return <div className={style.wrapper}>{children}</div>;
  }
}

export default Card;
