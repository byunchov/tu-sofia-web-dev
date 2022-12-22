import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.model';
import { HeroService } from '../services/hero.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  providers: [MessageService,ConfirmationService]
})
export class HeroListComponent implements OnInit {
  public heroes: any;
  public heroDialog: boolean = false;
  public hero: Hero = {} as Hero;

  constructor(
    private heroService: HeroService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

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
      error: (err) => {},
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

  resetHero() {
    this.hero = {} as Hero;
  }

  deleteHero(hero: Hero) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete '${hero.name}'?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.heroService.deleteHero(hero).subscribe({
          next: (hero) => {
            this.getHeroes();
          },
          error: (err) => {
            console.error(err);
          },
        });
      },
    });
  }
}
