import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
})
export class HeroListComponent implements OnInit {
  public heroes: any;
  public heroDialog: boolean = false;
  public hero: Hero = {} as Hero;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  showDialog() {
    this.heroDialog = true;
  }

  getHeroes() {
    this.heroService.getAllHeroes().subscribe({
      next: (heroes) => {
        let parsedHeroes = heroes.map((hero) => {
          return { ...hero, powers: hero.powers.map((pow) => pow['name']) };
        });

        this.heroes = parsedHeroes;
      },
      error: (err) => { },
    });
  }

  createHero() {
    this.heroService.createHero(this.hero).subscribe({
      next: (hero) => {
        this.resetHero();
        this.getHeroes();
        this.heroDialog = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  resetHero(){
    this.hero = {} as Hero;
  }
}
