import React from 'react';
import { SwitchButton, SwitchCircle, SwitchContainer, SwitchLabel } from './styles/Switch.styles';

interface ToggleSwitchProps {
  isActive: boolean;
  onToggle: () => void;
  onLabel?: string;
  offLabel?: string;
}

export const Switch: React.FC<ToggleSwitchProps> = ({ isActive, onToggle, onLabel = 'On', offLabel = 'Off' }) => {
  return (
    <SwitchContainer onClick={onToggle}>
      <SwitchLabel>{onLabel}</SwitchLabel>
      <SwitchButton>
        <SwitchCircle isActive={isActive} />
      </SwitchButton>
      <SwitchLabel>{offLabel}</SwitchLabel>
    </SwitchContainer>
  );
};
