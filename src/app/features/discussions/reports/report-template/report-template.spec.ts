import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTemplate } from './report-template';

describe('ReportTemplate', () => {
  let component: ReportTemplate;
  let fixture: ComponentFixture<ReportTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
