import React from 'react';
import PropTypes from 'prop-types';

import style from './ticket.module.scss';
import TicketSegment from '../tiсket-segment/ticket-segment';

function Ticket({ price, carrier, segments }) {
  const renderPrice = (number) => {
    const stringPrice = number.toString();
    return `${stringPrice.slice(0, 2)} ${stringPrice.slice(2)} P`;
  };

  return (
    <div className={style.ticket}>
      <header className={style.header}>
        <span className={style.price}>{renderPrice(price)}</span>
        <img className={style.logo} src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
      </header>
      <ul className={style['info-forward']}>
        <TicketSegment {...segments[0]} />
      </ul>
      <ul className={style['info-back']}>
        <TicketSegment {...segments[1]} />
      </ul>
    </div>
  );
}

Ticket.propTypes = {
  price: PropTypes.number.isRequired,
  carrier: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Ticket;
