import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss'],
})
export class ViewMovieComponent implements OnInit {
  submitted = false;
  loading = false;
  movies = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.GetRequest().subscribe(
      (response: HttpResponse<any>) => {
        this.movies = response?.body.results;
        console.log(response);
      },
      (error) => {
        console.log('error: ');
        console.log(error);
        this.loading = false;
      },
      () => {
        this.loading = false;
        console.log('completed');
        //this.router.navigateByUrl('/people/view');
      }
    );
  }
}
