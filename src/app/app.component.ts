import { Component, OnInit, Input } from '@angular/core';

import { Hero } from './_models/hero';
import { HeroService } from './services/hero.service';
import { sortByPower } from './utilities/sort';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'sary-task';

  searchText = '';

  constructor() {}

  setSearchText(event: any) {
    this.searchText = event;
  }

  ngOnInit(): void {}
}
