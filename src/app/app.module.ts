import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';



import { NgRatingBarModule } from 'ng-rating-bar';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HeroesTableComponent } from './components/heroes-table/heroes-table.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchMaterialPipe } from './pipes/search-material.pipe';
import { FormsModule } from '@angular/forms';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FiltersComponent,
    HeroesTableComponent,
    SearchPipe,
    SearchMaterialPipe,
    CustomTableComponent,
    HeroDetailComponent,
    AllHeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,

    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    NgRatingBarModule,
    MatDividerModule,
    MatGridListModule,

    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
