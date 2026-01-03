import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryDocument } from './salary-document';

describe('SalaryDocument', () => {
  let component: SalaryDocument;
  let fixture: ComponentFixture<SalaryDocument>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaryDocument]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryDocument);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
