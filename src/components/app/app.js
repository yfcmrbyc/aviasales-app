import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from './app.module.scss';
import TariffFilter from '../tariff-filter/tariff-filter';
import TicketsList from '../tickets-list/tickets-list';
import TransferFilter from '../transfer-filter/transfer-filter';
import Spiner from '../spiner/spiner';
import ErrorMessage from '../error-message/error-message';

function App({ isStoped, isError }) {
  const spiner = !isStoped ? <Spiner /> : null;
  if (isError) {
    return <ErrorMessage />;
  }
  return (
    <main className={style.app}>
      <div className={style.logo} />
      {spiner}
      <TransferFilter />
      <section className={style.container}>
        <TariffFilter />
        <TicketsList />
      </section>
    </main>
  );
}

App.propTypes = {
  isStoped: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isStoped: state.isStoped,
  isError: state.isError,
});

export default connect(mapStateToProps)(App);
