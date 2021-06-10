import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, SharedModule],
})
export class HomeModule {}
