import React from 'react';

import style from './tariff-filter.module.scss';

function TariffFilter() {
  return (
    <ul className={style['tariff-filter']}>
      <li>
        <button type="button" className={style['active-cheapest']}>
          Самый дешевый
        </button>
      </li>
      <li>
        <button type="button" className={style.btn}>
          Самый быстрый
        </button>
      </li>
      <li>
        <button type="button" className={style.optimal}>
          Оптимальный
        </button>
      </li>
    </ul>
  );
}

export default TariffFilter;
