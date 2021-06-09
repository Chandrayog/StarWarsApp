import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss'],
})
export class PeopleDetailComponent implements OnInit {
  submitted = false;
  loading = false;
  people: any;
  id: string;
  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.peopleService.GetRequest().subscribe((response: any) => {
    //   this.people = response;
    // });
    this.id = this.route.snapshot.paramMap.get('id');
    this.peopleService.GetRequestwithID(this.id).subscribe(
      (response) => {
        this.people = response.results;
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
