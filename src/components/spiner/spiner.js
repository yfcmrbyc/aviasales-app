import React from 'react';

import style from './spiner.module.scss';

function Spiner() {
  return (
    <div className={style.ellipsis}>
      <div />
      <div />
      <div />
      <div />
      <p>Загружаем все билеты . . .</p>
    </div>
  );
}

export default Spiner;
