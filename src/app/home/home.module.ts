import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [MainPageComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
