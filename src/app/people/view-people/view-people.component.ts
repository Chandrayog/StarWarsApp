import { HttpResponse } from '@angular/common/http';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeopleService } from 'src/app/services/people.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-people',
  templateUrl: './view-people.component.html',
  styleUrls: ['./view-people.component.scss'],
})
export class ViewPeopleComponent implements OnInit {
  submitted = false;
  loading = false;
  dataSource: any[] = [];
  total: number = 0;
  data: any;
  displayedColumns: string[] = ['index', 'name', 'view'];

  @ViewChild(MatPaginator) Paginator: MatPaginator | any;
  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.peopleService.GetRequest().subscribe(
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
