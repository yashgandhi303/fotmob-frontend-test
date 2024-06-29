import React, { useEffect } from 'react';
import { useToast } from '../context';
import { ToastContainer, ToastMessage } from './styles/Toast.styles';

export const Toast: React.FC = () => {
  const { toasts, removeToast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      if (toasts.length > 0) {
        removeToast(toasts[0].id);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [toasts, removeToast]);

  return (
    <ToastContainer>
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} type={toast.type}>
          {toast.message}
        </ToastMessage>
      ))}
    </ToastContainer>
  );
};
