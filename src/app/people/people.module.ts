import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { ViewPeopleComponent } from './view-people/view-people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

@NgModule({
  declarations: [ViewPeopleComponent, PeopleDetailComponent],
  imports: [CommonModule, PeopleRoutingModule],
})
export class PeopleModule {}
