export interface PlayerType {
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

export interface FetchError {
  message: string;
  statusCode?: number;
}

export interface GeneralCardProps {
  icon?: string;
  title?: string;
  description?: string;
  images?: string[];
  buttonText?: string;
  buttonLink?: string;
}

export interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface FotMobPlayerSearchData {
  id: string;
  name: string;
  teamName: string;
}
