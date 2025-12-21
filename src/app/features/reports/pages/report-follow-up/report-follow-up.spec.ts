import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFollowUp } from './report-follow-up';

describe('ReportFollowUp', () => {
  let component: ReportFollowUp;
  let fixture: ComponentFixture<ReportFollowUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportFollowUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFollowUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
