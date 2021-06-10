import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  submitted = false;
  loading = false;
  dataSource: any;
  id: string = '';
  displayedColumns: string[] = [
    'title',
    'director',
    'producer',
    'release_date',
  ];
  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '0';
    this.movieService.GetRequestwithID(this.id).subscribe(
      (response: HttpResponse<any>) => {
        this.dataSource = response?.body;
        console.log('dataSource');
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
      }
    );
  }
  navigateToProfile(id: string) {
    this.router.navigate(['./' + id], { relativeTo: this.activatedRoute });
  }
}
