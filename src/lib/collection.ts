interface PlayerType {
  firstname: string;
  lastname: string;
  birthday: string;
  image: string;
  team: string;
}

export interface PlayerCardType {
  id?: number;
  player: PlayerType;
}

export const fetchCollection = (): PlayerCardType[] => {
  /**
   * Step 2: Instead of directly returning the collection, fetch it from http://localhost:8001/cards
   */
  return [
    {
      id: 26166,
      player: {
        firstname: 'Karim',
        lastname: 'Benzema',
        team: 'Real Madrid',
        birthday: '1987-12-19T08:38:50.090Z',
        image:
          'https://images.fotmob.com/image_resources/playerimages/26166.png',
      },
    },
  ];
};
