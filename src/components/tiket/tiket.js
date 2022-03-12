import React from 'react';
import style from './tiket.module.scss';
import logo from './logo.png';

function Tiket() {
  return (
    <div className={style.tiket}>
      <header className={style.header}>
        <span className={style.price}>13 400 P</span>
        <img className={style.logo} src={logo} alt="S7 Airlines" />
      </header>
      <ul className={style['info-forward']}>
        <li className={style.container}>
          <h3 className={style.heading}>MOW - HKT</h3>
          <p className={style.text}>10:45 - 08:00</p>
        </li>
        <li className={style.container}>
          <h3 className={style.heading}>В пути</h3>
          <p className={style.text}>21ч 15м</p>
        </li>
        <li className={style.container}>
          <h3 className={style.heading}>2 пересадки</h3>
          <p className={style.text}>HKG, JNB</p>
        </li>
      </ul>
      <ul className={style['info-back']}>
        <li className={style.container}>
          <h3 className={style.heading}>MOW - HKT</h3>
          <p className={style.text}>11:20 - 00:50</p>
        </li>
        <li className={style.container}>
          <h3 className={style.heading}>В пути</h3>
          <p className={style.text}>13ч 30м</p>
        </li>
        <li className={style.container}>
          <h3 className={style.heading}>1 пересадки</h3>
          <p className={style.text}>HKG</p>
        </li>
      </ul>
    </div>
  );
}

export default Tiket;
