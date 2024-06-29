import { styled } from 'styled-components';
import LazyImage from '../../LazyImage';

export const AutocompleteContainer = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
`;

export const SuggestionsList = styled.ul<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 5px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

export const Suggestion = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};

  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.background};
  }
`;

export const PlayerInfo = styled.div`
  margin-left: 10px;
`;

export const StyledLazyImage = styled(LazyImage)`
  width: 40px;
  height: 40px;
`;
