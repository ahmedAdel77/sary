import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit, OnChanges {
  constructor(private hero: HeroService) {}
  @Output() searchText = new EventEmitter<String>();
  @Output() sortPower = new EventEmitter<Boolean>();
  textToSearch = '';
  isSortedByPower = false;

  onSearchTextChange(event: any) {
    if (event.key === 'Backspace' && this.textToSearch.length !== 0) {
      this.textToSearch = this.textToSearch.slice(0, -1);
    } else if (event.key === 'Backspace' && this.textToSearch.length === 0) {
      this.textToSearch = '';
    } else if (
      event.key === 'Shift' ||
      event.key === 'Control' ||
      event.key === 'Alt'
    ) {
      this.textToSearch = this.textToSearch;
    } else if (event.key === 'Escape') {
      this.clearSearch();
    } else {
      this.textToSearch += event.key;
    }
    this.searchText.emit(this.textToSearch);
  }

  sortByPower(event: any) {
    this.hero.sortHeroesByPower.next(event.checked);
  }

  clearSearch() {
    this.textToSearch = '';
    this.searchText.emit(this.textToSearch);
  }

  ngOnChanges(): void {}

  ngOnInit(): void {}
}
