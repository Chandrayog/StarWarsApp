import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { ViewPlanetComponent } from './view-planet/view-planet.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ViewPlanetComponent, PlanetDetailComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PlanetsModule {}
