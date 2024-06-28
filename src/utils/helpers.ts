export const generatePlayerName = (firstName: string, lastName: string) => {
  if (!firstName || !lastName) {
    return 'Not Available';
  }
  return `${firstName} ${lastName}`;
};

export const generateImageUrl = (playerId: number): string => {
  if (playerId) {
    const imageUrl = `${process.env.REACT_APP_IMAGE_SOURCE_URL}/${playerId}.png`;
    return imageUrl as string;
  }
  return '';
};

export const humanReadableDate = (date: string) => {
  if (date) {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
};
