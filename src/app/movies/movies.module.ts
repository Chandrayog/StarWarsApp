import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [ViewMovieComponent, MovieDetailComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class MoviesModule {}
