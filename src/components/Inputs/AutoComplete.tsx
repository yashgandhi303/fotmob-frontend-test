import React, { useState, useRef, FC } from 'react';
import { useDebounce, useFotmobSearch, useOnClickOutside } from '../../hooks';
import { FotMobPlayerSearchData } from '../../types';
import { generatePlayerImageUrl } from '../../utils/helpers';
import {
  PlayerInfo,
  AutocompleteContainer,
  StyledLazyImage,
  Suggestion,
  SuggestionsList,
} from './styles/AutoComplete.styles';
import { Input } from './Input';

interface AutocompleteProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (player: FotMobPlayerSearchData) => void;
}

export const Autocomplete: FC<AutocompleteProps> = ({ value, onChange, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { data: searchResults } = useFotmobSearch(debouncedSearchTerm);

  const suggestionsRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(suggestionsRef, () => setShowSuggestions(false));

  return (
    <AutocompleteContainer ref={suggestionsRef}>
      <Input
        value={value}
        onChange={(e) => {
          onChange(e);
          setSearchTerm(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
      />
      {searchResults && (
        <SuggestionsList visible={showSuggestions}>
          {searchResults.map((player: FotMobPlayerSearchData) => (
            <Suggestion
              key={player.id}
              onClick={() => {
                onSelect(player);
                setShowSuggestions(false);
              }}
            >
              <StyledLazyImage src={generatePlayerImageUrl(+player.id)} alt={player.name} />
              <PlayerInfo>
                {player.name} - {player.teamName}
              </PlayerInfo>
            </Suggestion>
          ))}
        </SuggestionsList>
      )}
    </AutocompleteContainer>
  );
};
