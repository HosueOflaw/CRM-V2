import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNumofStatement } from './report-numof-statement';

describe('ReportNumofStatement', () => {
  let component: ReportNumofStatement;
  let fixture: ComponentFixture<ReportNumofStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportNumofStatement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportNumofStatement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
