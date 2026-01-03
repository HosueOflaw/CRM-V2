import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionDashboard } from './execution-dashboard';

describe('ExecutionDashboard', () => {
  let component: ExecutionDashboard;
  let fixture: ComponentFixture<ExecutionDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutionDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
