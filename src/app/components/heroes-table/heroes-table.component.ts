import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { sortByPower } from 'src/app/utilities/sort';
import { Hero } from 'src/app/_models/hero';

import { HeroService } from './../../services/hero.service';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss'],
})
export class HeroesTableComponent implements OnInit, AfterViewInit {
  heroesData: Hero[];
  HeroesDataToView: Hero[];
  searchText = '';
  @Input() dataSource;
  @Input() searchQuery;
  @Input() powerSort;

  constructor(
    private heroes: HeroService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  displayedColumns: string[] = ['name', 'power', 'rate'];

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.heroes.heroesData.subscribe((heroes) => {
      this.heroesData = [...heroes];
      this.HeroesDataToView = [...heroes];
      this.dataSource = new MatTableDataSource(this.HeroesDataToView);
      this.changeDetectorRefs.detectChanges();
    });

    this.heroes.sortHeroesByPower.subscribe((isSort) => {
      if (isSort) {
        this.HeroesDataToView = [...this.HeroesDataToView.sort(sortByPower)];
      } else {
        this.HeroesDataToView = [...this.heroesData];
      }
      this.dataSource = new MatTableDataSource(this.HeroesDataToView);
      this.changeDetectorRefs.detectChanges();
    });

    this.heroes.getHeroes();
  }

  onRateValueChange(event: any, heroId: String) {
    const ratingData = { rate: event, id: heroId };
    this.heroes.rateValueChange(ratingData);
  }
}
