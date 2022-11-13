import { Injectable } from '@nestjs/common';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
  heroes: Hero[] = [
    {
      name: 'Spiderman',
      realName: 'Peter Parker',
      powers: ['web', 'strength'],
      universe: 'Marvel',
    },

    {
      name: 'Superman',
      realName: 'Clark Kent',
      powers: ['laser', 'strength'],
      universe: 'DC',
    },

    {
      name: 'Superman',
      realName: 'Clark Kent',
      powers: ['laser', 'strength'],
      universe: 'Marvel',
    },

    {
      name: 'Batman',
      realName: 'Bruce Wayne',
      powers: ['rich', 'cool'],
      universe: 'DC',
    },
  ];

  findHeroes(name: string): Hero[] {
    return this.heroes.filter((hero) => hero.name === name);
  }
}
