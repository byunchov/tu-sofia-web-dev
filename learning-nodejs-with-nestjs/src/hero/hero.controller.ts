import { Controller, Get, Param, Query } from '@nestjs/common';
import { HeroService } from './hero.service';
import { Hero } from './hero.model';

@Controller('hero')
export class HeroController {
  constructor(private readonly heroService: HeroService) {}

  @Get()
  getHeroes(@Query('name') name: string): Hero[] {
    return this.heroService.findHeroes(name);
  }

  /** FYI Endpoints */
  @Get(':id')
  getOneHero(@Param('id') id: number) {
    return id;
  }
}

// http://localhost:3000/hero?name=Batman
