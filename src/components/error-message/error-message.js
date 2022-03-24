import React from 'react';
import { Alert } from 'antd';

function ErrorMessage() {
  return (
    <Alert message="Упс.. Что-то пошло не так." description="Мы уже стараемся это починить." type="error" showIcon />
  );
}

export default ErrorMessage;
