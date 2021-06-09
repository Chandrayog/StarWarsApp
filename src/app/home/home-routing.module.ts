/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'view' },
  { path: 'view', component: MainPageComponent },
  // { path: 'view/:id', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
