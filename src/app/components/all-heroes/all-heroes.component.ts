import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.scss'],
})
export class AllHeroesComponent implements OnInit {
  searchText = '';

  constructor() {}

  setSearchText(event: any) {
    this.searchText = event;
  }

  ngOnInit(): void {}
}
