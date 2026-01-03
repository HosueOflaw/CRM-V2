import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCompaniesPerformance } from './report-companies-performance';

describe('ReportCompaniesPerformance', () => {
  let component: ReportCompaniesPerformance;
  let fixture: ComponentFixture<ReportCompaniesPerformance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportCompaniesPerformance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportCompaniesPerformance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
