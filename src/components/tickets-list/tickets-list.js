import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import Ticket from '../ticket/ticket';

function TicketsList({ tickets }) {
  const renderTickets = (data) => {
    const newArr = data.slice(0, 5);
    return newArr.map((ticket) => {
      const key = uuidv4();
      return <Ticket key={key} {...ticket} />;
    });
  };

  const ticketsList = tickets.length > 0 ? renderTickets(tickets) : null;
  return <ul>{ticketsList}</ul>;
}

TicketsList.defaultProps = {
  tickets: [],
};

TicketsList.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

const mapStateToProps = (state) => ({
  tickets: state.app.tickets,
});

export default connect(mapStateToProps)(TicketsList);
