import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandateReport } from './mandate-report';

describe('MandateReport', () => {
  let component: MandateReport;
  let fixture: ComponentFixture<MandateReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MandateReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandateReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
