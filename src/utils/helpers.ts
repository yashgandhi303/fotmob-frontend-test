import { PlayerType } from '../types';

type PlayerNameType = Pick<PlayerType, 'firstname' | 'lastname'>;
export const generatePlayerName = ({ firstname, lastname }: PlayerNameType): string => {
  if (!firstname && !lastname) {
    return 'Not Available';
  }
  return `${firstname} ${lastname}`;
};

export const generatePlayerImageUrl = (playerId: number): string => {
  if (playerId) {
    return `${process.env.REACT_APP_IMAGE_SOURCE_URL}/${playerId}.png`;
  }
  return '';
};

export const humanReadableDate = (date: string, formattedDate: boolean = false): string => {
  if (!date) {
    return 'Date not available';
  }

  const d = new Date(date);

  if (formattedDate) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
    const day = String(d.getDate()).padStart(2, '0'); // Add leading zero if needed
    return `${year}-${month}-${day}`;
  } else {
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
};
