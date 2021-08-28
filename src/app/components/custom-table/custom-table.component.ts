import { Component, OnInit, Input } from '@angular/core';

import { sortByPower } from 'src/app/utilities/sort';
import { Hero } from 'src/app/_models/hero';

import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss'],
})
export class CustomTableComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private heroes: HeroService) {}

  ngOnInit(): void {}

  onRateValueChange(event: any, heroId: String) {
    const ratingData = { rate: event, id: heroId };
    this.heroes.rateValueChange(ratingData);
  }
}
