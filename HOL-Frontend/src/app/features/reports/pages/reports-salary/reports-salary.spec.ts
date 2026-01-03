import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsSalary } from './reports-salary';

describe('reports-salary', () => {
  let component: ReportsSalary;
  let fixture: ComponentFixture<ReportsSalary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsSalary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsSalary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
