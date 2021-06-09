import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
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
  dataSource: any;
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    // this.peopleService.GetRequest().subscribe((response: any) => {
    //   this.people = response;
    // });


//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//   }
//     this.peopleService.GetRequest().subscribe(
//       (response) => {
//        // this.people = response.results;
//         this.dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
//         console.log(response);
//       },
//       (error) => {
//         console.log('error: ');
//         console.log(error);
//         this.loading = false;
//       },
//       () => {
//         this.loading = false;
//         console.log('completed');
//         //this.router.navigateByUrl('/people/view');
//       }
//     );
//   }
//   GetDetails = function (index) {
//     var name = $scope.Customers[index].Name;
//     var country = $scope.Customers[index].Country;
//     $window.alert("Name: " + name + "\nCountry: " + country);
// };
}
