import React, { useState, useRef } from 'react';
import { Control, Controller, ControllerRenderProps } from 'react-hook-form';
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
import { StyledInput } from './styles/Input.styles';
import { CreatePlayerProps } from '../Forms/CreatePlayerForm';

interface AutocompleteProps {
  name: string;
  control: Control<CreatePlayerProps>;
  onSelect: (player: FotMobPlayerSearchData) => void;
  rules?: {
    [key: string]: string;
  };
}

const Autocomplete: React.FC<AutocompleteProps> = ({ name, control, onSelect, rules }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { data: searchResults } = useFotmobSearch(debouncedSearchTerm);

  const suggestionsRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(suggestionsRef, () => setShowSuggestions(false));

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={rules}
      render={({ field }: { field: ControllerRenderProps }) => (
        <AutocompleteContainer ref={suggestionsRef}>
          <StyledInput
            {...field}
            onChange={(e) => {
              field.onChange(e);
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
      )}
    />
  );
};

export default Autocomplete;
