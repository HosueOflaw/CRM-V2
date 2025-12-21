import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagementDashboard } from './car-management-dashboard';

describe('CarManagementDashboard', () => {
  let component: CarManagementDashboard;
  let fixture: ComponentFixture<CarManagementDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarManagementDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarManagementDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
