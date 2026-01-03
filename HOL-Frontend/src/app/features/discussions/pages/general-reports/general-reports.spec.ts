import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralReports } from './general-reports';

describe('GeneralReports', () => {
  let component: GeneralReports;
  let fixture: ComponentFixture<GeneralReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralReports]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralReports);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
