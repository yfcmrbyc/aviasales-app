import React from 'react';

import style from './alert-message.module.scss';

function AlertMessage() {
  return (
    <div className={style.alert}>
      <h2 className={style.title}>Рейсов, подходящих под заданные фильтры, не найдено.</h2>
      <p className={style.text}>Пожалуйста, попробуйте изменить выбранные вами фильтры.</p>
    </div>
  );
}

export default AlertMessage;
