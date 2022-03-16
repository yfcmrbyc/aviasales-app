import React from 'react';

import style from './app.module.scss';
import TariffFilter from '../tariff-filter/tariff-filter';
import TicketsList from '../tickets-list/tickets-list';
import TransferFilter from '../transfer-filter/transfer-filter';

function App() {
  return (
    <main className={style.app}>
      <div className={style.logo} />
      <TransferFilter />
      <section className={style.container}>
        <TariffFilter />
        <TicketsList />
        <button type="button" className={style.button}>
          Показать еще 5 билетов!
        </button>
      </section>
    </main>
  );
}

export default App;
