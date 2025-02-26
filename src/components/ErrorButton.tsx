import { useState } from 'react';
import { Button } from '@/components/ui/button';

const ErrorButton = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('🔥 Ошибка! Компонент сломался.');
  }

  return (
    <Button onClick={() => setThrowError(true)} variant="destructive">
      Вызвать ошибку
    </Button>
  );
};

export default ErrorButton;
