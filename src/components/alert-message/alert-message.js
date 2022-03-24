import React from 'react';
import { Alert } from 'antd';

function AlertMessage() {
  return (
    <Alert
      message="Рейсов, подходящих под заданные фильтры, не найдено."
      description="Пожалуйста, попробуйте изменить выбранные вами фильтры."
      type="info"
      showIcon
    />
  );
}

export default AlertMessage;
