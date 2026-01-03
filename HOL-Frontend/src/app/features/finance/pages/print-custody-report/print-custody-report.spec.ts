import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCustodyReport } from './print-custody-report';

describe('PrintCustodyReport', () => {
  let component: PrintCustodyReport;
  let fixture: ComponentFixture<PrintCustodyReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintCustodyReport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCustodyReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
