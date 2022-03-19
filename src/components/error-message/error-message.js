import React from 'react';

import style from './error-message.module.scss';

function ErrorMessage() {
  return (
    <div className={style.error}>
      <h3 className={style.title}>Упс.. Что-то пошло не так.</h3>
    </div>
  );
}

export default ErrorMessage;
