import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectButton = styled.button`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  padding: 10px 20px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectContent = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
  border-radius: 5px;
  min-width: 200px;
  overflow: hidden;
`;

export const SelectItem = styled.div`
  color: ${({ theme }) => theme.color};
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonColor};
  }
`;
