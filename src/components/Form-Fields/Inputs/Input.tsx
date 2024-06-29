import React from 'react';
import {
  Control,
  Controller,
  ControllerRenderProps,
  FieldValues,
  Path,
  PathValue,
  RegisterOptions,
} from 'react-hook-form';
import { humanReadableDate } from '../../../utils/helpers';
import { StyledInput } from './styles/Input.styles';

interface InputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  type?: string;
  defaultValue?: PathValue<T, Path<T>>;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'>;
  readOnly?: boolean;
}

export const Input = <T extends FieldValues>({
  name,
  control,
  type = 'text',
  defaultValue = '' as PathValue<T, Path<T>>,
  rules,
  readOnly = false,
}: InputProps<T>) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={rules}
    render={({ field }: { field: ControllerRenderProps<T> }) => (
      <StyledInput
        {...field}
        readOnly={readOnly}
        type={type}
        value={type === 'date' ? humanReadableDate(field.value, true) : field.value}
      />
    )}
  />
);
