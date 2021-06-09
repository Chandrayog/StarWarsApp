import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { ViewPlanetComponent } from './view-planet/view-planet.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

@NgModule({
  declarations: [ViewPlanetComponent, PlanetDetailComponent],
  imports: [CommonModule, PlanetsRoutingModule],
})
export class PlanetsModule {}
