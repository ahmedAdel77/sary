import { Injectable } from '@angular/core';

import { Observable, Subject, of } from 'rxjs';

import { Hero } from '../_models/hero';
import { HEROES } from './../data/mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  sortHeroesByPower = new Subject();
  heroesData = new Subject<Hero[]>();

  constructor() {}

  rateValueChange(data: { rate: number; id: String }) {
    let heroesList = [...HEROES];
    let heroToUpdate = heroesList.findIndex((hero) => hero.id === data.id);
    heroesList[heroToUpdate].rate = data.rate;
    this.heroesData.next([...heroesList]);
  }

  getHeroes(): void {
    this.heroesData.next([...HEROES]);
  }

  getHero(id: String): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    return of(hero);
  }
}
