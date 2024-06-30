import styled, { css } from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SwitchLabel = styled.span`
  margin: 0 10px;
  font-size: 16px;
  color: ${({ theme }) => theme.color};
`;

export const SwitchButton = styled.div`
  position: relative;
  width: 60px;
  height: 30px;
  background: linear-gradient(90deg, #a1c4fd, #c2e9fb);
  border-radius: 30px;
  transition: background-color 0.3s ease;
`;

export const SwitchCircle = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  transition: left 0.3s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      left: 33px;
    `}
`;
