import { GenreParams, FilterParams } from './enums';

export interface IOptions {
  id: number;
  name: string;
  value: GenreParams | FilterParams;
}

export const FilterParam: IOptions[] = [
  { id: 1, name: 'Title', value: FilterParams.TITLE },
  { id: 2, name: 'Date Release', value: FilterParams.DATE },
  { id: 3, name: 'Platform', value: FilterParams.PLATFORM },
  { id: 4, name: 'Developer', value: FilterParams.DEV },
];

export const GenreParam: IOptions[] = [
  { id: 1, name: 'All', value: GenreParams.ALL },
  { id: 2, name: 'ARPG', value: GenreParams.ARPG },
  { id: 3, name: 'MMOARPG', value: GenreParams.MMOARPG },
  { id: 4, name: 'Strategy', value: GenreParams.STRATEGY },
  { id: 5, name: 'MMORPG', value: GenreParams.MMORPG },
  { id: 6, name: 'Fighting', value: GenreParams.FIGHTING },
  { id: 7, name: 'Action RPG', value: GenreParams.ACTION_RPG },
  { id: 8, name: 'Battle Royale', value: GenreParams.BATTLE_ROYALE },
  { id: 9, name: 'MOBA', value: GenreParams.MOBA },
  { id: 10, name: 'Card', value: GenreParams.CARD },
  { id: 11, name: 'Sports', value: GenreParams.SPORTS },
  { id: 12, name: 'Racing', value: GenreParams.RACING },
  { id: 13, name: 'Card Game', value: GenreParams.CARD_GAME },
  { id: 14, name: 'MMO', value: GenreParams.MMO },
  { id: 15, name: 'Social', value: GenreParams.SOCIAL },
  { id: 16, name: 'Fantasy', value: GenreParams.FANTASY },
];

export const API = 'https://free-to-play-games-database.p.rapidapi.com/api';

export type Game = {
  id: string;
  title: string;
  thumbnail: string;
  genre: string;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
};
export type GameRS = {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
};
export type Images = { id: number; image: string };
export type GameDescT = {
  title: string;
  thumbnail: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  minimum_system_requirements: GameRS;
  screenshots: Images[];
};

interface IData {
  [key: string]: string;
}
export const SYMB_LEN = 250;
export const options: IData = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};
