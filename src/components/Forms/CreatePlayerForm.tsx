import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';
import { useQueryClient, useMutation } from 'react-query';
import { axiosInstance } from '../../api';
import { Input, Autocomplete } from '../../components/Form-Fields';
import { usePlayerDetails } from '../../hooks';
import { FotMobPlayerSearchData, PlayerCardType, PlayerType } from '../../types';
import { generatePlayerImageUrl } from '../../utils/helpers';
import { useToast } from '../../context';
import { useHistory } from 'react-router-dom';
import { Form, Error, Button } from './styles/CreatePlayerForm.styles';
import { fetchPlayerById } from '../../lib/endpoints';

interface CreatePlayerProps extends PlayerType {
  player?: string;
}

export const CreatePlayerForm: React.FC = () => {
  const { addToast } = useToast();
  const queryClient = useQueryClient();
  const router = useHistory();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isDirty },
    setError,
    clearErrors,
  } = useForm<CreatePlayerProps>();
  const [selectedPlayerId, setSelectedPlayerId] = useState<number>();
  const { data: playerDetails, isLoading, isError } = usePlayerDetails(selectedPlayerId as number);
  const [serverError, setServerError] = useState<string | null>(null);

  const mutation = useMutation((newPlayer: PlayerCardType) => axiosInstance.post('/cards', newPlayer), {
    onSuccess: () => {
      queryClient.invalidateQueries('allPlayers');
      addToast('Card created successfully!', 'success');
      router?.push('/collection');
    },
    onError: (error: AxiosError) => {
      setServerError('Error creating card. Please try again.');
      addToast(error?.message, 'error');
    },
  });

  const checkIfPlayerExists = async (id: number): Promise<void> => {
    try {
      const data = await fetchPlayerById(id);
      if (data && data?.id) {
        setError('player', {
          type: 'manual',
          message: 'Player already exists!',
        });
        addToast('Player already exists!', 'error');
      }
    } catch (error) {
      clearErrors('player');
    }
  };

  const onSubmit: SubmitHandler<CreatePlayerProps> = async (data) => {
    if (Object.keys(errors).length > 0) {
      return;
    }

    const payload: PlayerCardType = {
      id: selectedPlayerId,
      player: {
        ...data,
        image: selectedPlayerId ? generatePlayerImageUrl(selectedPlayerId) : '',
      },
    };

    mutation.mutate(payload);
  };

  const handlePlayerSelect = async (player: FotMobPlayerSearchData) => {
    const id = +player.id;
    setSelectedPlayerId(id);
    clearErrors();
    await checkIfPlayerExists(id);
    setValue('player', player.name);
  };

  useEffect(() => {
    if (playerDetails && playerDetails?.player) {
      setValue('firstname', playerDetails.player.firstname);
      setValue('lastname', playerDetails.player.lastname);
      setValue('birthday', playerDetails.player.birthday);
      setValue('team', playerDetails.player.team);
    }
  }, [playerDetails, setValue]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {serverError && <Error>{serverError}</Error>}
      <label>Player</label>
      <Autocomplete
        name="player"
        control={control}
        onSelect={handlePlayerSelect}
        rules={{ required: 'Player is required' }}
      />
      {errors.player && <Error>{errors.player.message}</Error>}

      <label>First Name</label>
      <Input readOnly name="firstname" control={control} rules={{ required: 'First name is required' }} />
      {errors.firstname && <Error>{errors.firstname.message}</Error>}

      <label>Last Name</label>
      <Input readOnly name="lastname" control={control} rules={{ required: 'Last name is required' }} />
      {errors.lastname && <Error>{errors.lastname.message}</Error>}

      <label>Date of Birth</label>
      <Input readOnly name="birthday" control={control} type="date" rules={{ required: 'Date of birth is required' }} />
      {errors.birthday && <Error>{errors.birthday.message}</Error>}

      <label>Team</label>
      <Input name="team" readOnly control={control} rules={{ required: 'Team is required' }} />
      {errors.team && <Error>{errors.team.message}</Error>}

      <Button type="submit" disabled={!isDirty || isLoading || Object.keys(errors).length > 0 || !!serverError}>
        Create Card
      </Button>

      {isLoading && <p>Loading player details...</p>}
      {isError && <Error>Error fetching player details. Please try again.</Error>}
    </Form>
  );
};
