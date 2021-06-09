import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlanetComponent } from './view-planet.component';

describe('ViewPlanetComponent', () => {
  let component: ViewPlanetComponent;
  let fixture: ComponentFixture<ViewPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlanetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
