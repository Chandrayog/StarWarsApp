import { HttpResponse } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss'],
})
export class ViewMovieComponent implements OnInit {
  submitted = false;
  loading = false;
  dataSource: any[] = [];
  total: number = 0;
  data: any;
  displayedColumns: string[] = ['index', 'title', 'view'];
  @ViewChild(MatPaginator) Paginator: MatPaginator | any;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.movieService.GetRequest().subscribe(
      (response: HttpResponse<any>) => {
        this.dataSource = response?.body.results;
        this.data = new MatTableDataSource(this.dataSource);
        this.data.paginator = this.Paginator;
        console.log(this.data.paginator);
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
  onRowClicked(row: any) {
    this.router.navigate(['./' + (this.dataSource.indexOf(row) + 1)], {
      relativeTo: this.activatedRoute,
    });
  }
}
