import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAndImportNum } from './export-and-import-num';

describe('ExportAndImportNum', () => {
  let component: ExportAndImportNum;
  let fixture: ComponentFixture<ExportAndImportNum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportAndImportNum]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExportAndImportNum);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
