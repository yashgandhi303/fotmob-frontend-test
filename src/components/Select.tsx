import React, { useRef, useState } from 'react';
import { SelectContainer, SelectButton, SelectContent, SelectItem } from './styles/Select.styles';
import { useOnClickOutside } from '../hooks';

interface SelectProps {
  options: string[];
  onSelect: (option: string) => void;
  selectedOption?: string;
  buttonLabel?: string;
}

export const Select: React.FC<SelectProps> = ({ options, onSelect, selectedOption, buttonLabel = 'Sort by' }) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOnClickOutside(selectRef, () => setIsOpen(false));

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <SelectContainer ref={selectRef}>
      <SelectButton onClick={handleToggle}>
        {selectedOption || buttonLabel} <span>▼</span>
      </SelectButton>
      <SelectContent isOpen={isOpen}>
        {options.map((option) => (
          <SelectItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectContainer>
  );
};
