import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleRoutingModule } from './people-routing.module';
import { ViewPeopleComponent } from './view-people/view-people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewPeopleComponent, PeopleDetailComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class PeopleModule {}
