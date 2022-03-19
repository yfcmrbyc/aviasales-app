import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import AlertMessage from '../alert-message/alert-message';
import Ticket from '../ticket/ticket';
import style from './tickets-list.module.scss';
import { loadMoreTickets } from '../../actions/actions';

function TicketsList({ tickets, isAdded, end, moreTickets }) {
  const renderTickets = (data, valueBegin, valueEnd) =>
    data.slice(valueBegin, valueEnd).map((ticket) => {
      const key = uuidv4();
      return <Ticket key={key} {...ticket} />;
    });

  const button = (
    <button onClick={moreTickets} type="button" className={style.button}>
      Показать еще 5 билетов!
    </button>
  );

  const ticketsList = tickets.length > 0 ? renderTickets(tickets, 0, 5) : null;
  const addedTickets = isAdded ? renderTickets(tickets, 5, end) : null;
  const buttonOrAlert = tickets.length === 0 ? <AlertMessage /> : button;

  return (
    <ul>
      {ticketsList}
      {addedTickets}
      {buttonOrAlert}
    </ul>
  );
}

TicketsList.defaultProps = {
  tickets: [],
};

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  isAdded: PropTypes.bool.isRequired,
  end: PropTypes.number.isRequired,
  moreTickets: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tickets: state.filteredTickets.tickets,
  isAdded: state.isAdded,
  end: state.end,
});

const mapDispatchToProps = (dispatch) => ({
  moreTickets: () => dispatch(loadMoreTickets()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
