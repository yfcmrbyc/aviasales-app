import React from 'react';
import style from './transfer-filter.module.scss';

function TransferFilter() {
  return (
    <aside className={style['transfer-filter']}>
      <p className={style.title}>Количество пересадок</p>
      <ul>
        <li className={style.item}>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkbox} />
            Все
          </label>
        </li>
        <li className={style.item}>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkbox} />
            Без пересадок
          </label>
        </li>
        <li className={style.item}>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkbox} />1 пересадка
          </label>
        </li>
        <li className={style.item}>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkbox} />2 пересадки
          </label>
        </li>
        <li className={style.item}>
          <label className={style.label}>
            <input className={style.input} type="checkbox" />
            <span className={style.checkbox} />3 пересадки
          </label>
        </li>
      </ul>
    </aside>
  );
}

export default TransferFilter;
