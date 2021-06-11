import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
})
export class PeopleDetailComponent implements OnInit {
  submitted = false;
  loading = false;
  dataSource: any;
  id: string = '';
  displayedColumns: string[] = [
    'name',
    'height',
    'mass',
    'hair_color',
    'skin_color',
    'gender',
    'birth_year',
  ];
  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '0';
    this.peopleService.GetRequestwithID(this.id).subscribe(
      (response: HttpResponse<any>) => {
        this.dataSource = response?.body;
        console.log('dataSource');
        console.log(this.dataSource);
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
