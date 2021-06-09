import { Component, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-view-people',
  templateUrl: './view-people.component.html',
  styleUrls: ['./view-people.component.scss'],
})
export class ViewPeopleComponent implements OnInit {
  submitted = false;
  loading = false;
  people = [];
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    // this.peopleService.GetRequest().subscribe((response: any) => {
    //   this.people = response;
    // });
    this.peopleService.GetRequest().subscribe(
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
