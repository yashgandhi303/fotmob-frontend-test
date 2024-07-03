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
import { humanReadableDate } from '../utils/helpers';
import { Autocomplete, Input } from './Inputs';
import { FotMobPlayerSearchData } from '../types';

export interface FormFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  rules?: Omit<RegisterOptions<T, Path<T>>, 'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'>;
  type?: string;
  defaultValue?: PathValue<T, Path<T>>;
  readOnly?: boolean;
  onSelect?: (player: FotMobPlayerSearchData) => void;
  isAutocomplete?: boolean;
}

export const FormField = <T extends FieldValues>({
  name,
  control,
  rules,
  type = 'text',
  defaultValue,
  readOnly = false,
  onSelect,
  isAutocomplete = false,
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    rules={rules}
    render={({ field }: { field: ControllerRenderProps<T> }) => (
      <>
        {isAutocomplete ? (
          <Autocomplete
            value={field.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e)}
            onSelect={(player: FotMobPlayerSearchData) => onSelect && onSelect(player)}
          />
        ) : (
          <Input
            value={type === 'date' ? humanReadableDate(field.value, true) : field.value}
            onChange={field.onChange}
            type={type}
            readOnly={readOnly}
          />
        )}
      </>
    )}
  />
);
