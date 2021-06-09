import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-view-planet',
  templateUrl: './view-planet.component.html',
  styleUrls: ['./view-planet.component.scss'],
})
export class ViewPlanetComponent implements OnInit {
  submitted = false;
  loading = false;
  planets = [];
  constructor(private planetService: PlanetService) {}

  ngOnInit(): void {
    this.planetService.GetRequest().subscribe(
      (response) => {
        this.planets = response.results;
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
