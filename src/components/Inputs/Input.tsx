import React from 'react';
import { Control, Controller, ControllerRenderProps } from 'react-hook-form';
import { humanReadableDate } from '../../utils/helpers';
import { StyledInput } from './styles/Input.styles';
import { CreatePlayerProps } from '../Forms/CreatePlayerForm';

interface InputProps {
  name: string;
  control: Control<CreatePlayerProps>;
  type?: string;
  defaultValue?: string;
  rules?: {
    [key: string]: string;
  };
  readOnly?: boolean;
}

const Input: React.FC<InputProps> = ({ name, control, type = 'text', defaultValue = '', rules, readOnly = false }) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={rules}
    render={({ field }: { field: ControllerRenderProps }) => (
      <StyledInput
        {...field}
        readOnly={readOnly}
        type={type}
        value={type === 'date' ? humanReadableDate(field.value, true) : field.value}
      />
    )}
  />
);

export default Input;
