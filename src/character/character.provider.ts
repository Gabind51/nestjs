import { Character } from './character.entity';

export const characterProviders = [
  {
    provide: 'CHARACTER_PROVIDER',
    useValue: Character,
  },
];
