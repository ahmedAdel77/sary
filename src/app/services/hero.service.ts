import { Injectable } from '@angular/core';

import { Observable, Subject, of } from 'rxjs';

import { Hero } from '../_models/hero';
import { HEROES } from './../data/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  sortHeroesByPower = new Subject();
  editHeroRating = new Subject();

  constructor() {
    this.editHeroRating.subscribe((data: { rate: number; id: String }) => {
      let heroToUpdate = HEROES.findIndex((hero) => hero.id === data.id);
      HEROES[heroToUpdate].rate = data.rate;
    });
  }


  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  getHero(id: String): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    return of(hero);
  }
}
