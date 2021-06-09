import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPeopleComponent } from './view-people.component';

describe('ViewPeopleComponent', () => {
  let component: ViewPeopleComponent;
  let fixture: ComponentFixture<ViewPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
