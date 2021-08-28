import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllHeroesComponent } from './components/all-heroes/all-heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/all-heroes', pathMatch: 'full' },
  { path: 'all-heroes', component: AllHeroesComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
