import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  ManagementDashboard } from './managments-dashboard';

describe('ManagementDashboard', () => {
  let component: ManagementDashboard;
  let fixture: ComponentFixture<ManagementDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
