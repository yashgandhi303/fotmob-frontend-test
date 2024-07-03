import React, { FC } from 'react';
import { StyledInput } from './styles/Input.styles';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  readOnly?: boolean;
  onFocus?: () => void;
}

export const Input: FC<InputProps> = ({ value, onChange, type = 'text', readOnly = false }) => (
  <StyledInput value={value} onChange={onChange} type={type} readOnly={readOnly} />
);
