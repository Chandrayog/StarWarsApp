import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss'],
})
export class PlanetDetailComponent implements OnInit {
  submitted = false;
  loading = false;
  dataSource: any;
  id: string = '';
  displayedColumns: string[] = ['name', 'terrain', 'population'];
  constructor(
    private planetService: PlanetService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') ?? '0';
    this.planetService.GetRequestwithID(this.id).subscribe(
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
