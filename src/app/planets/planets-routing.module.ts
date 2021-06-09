/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPlanetComponent } from './view-planet/view-planet.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'view' },
  { path: 'view', component: ViewPlanetComponent },
  // { path: 'view/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {}
