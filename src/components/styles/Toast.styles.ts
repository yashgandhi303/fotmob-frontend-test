import styled, { css, keyframes } from 'styled-components';
import { ToastType } from '../../context';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const toastStyles = {
  success: css`
    background-color: #4caf50;
  `,
  error: css`
    background-color: #f44336;
  `,
  warning: css`
    background-color: #ff9800;
  `,
  info: css`
    background-color: #2196f3;
  `,
};

export const ToastMessage = styled.div<{ type: ToastType }>`
  padding: 10px;
  border-radius: 5px;
  color: white;
  animation: ${fadeIn} 0.3s ease-out;
  ${(props) => toastStyles[props.type]}
`;
