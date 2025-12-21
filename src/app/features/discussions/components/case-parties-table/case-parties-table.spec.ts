import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasePartiesTable } from './case-parties-table';

describe('CasePartiesTable', () => {
  let component: CasePartiesTable;
  let fixture: ComponentFixture<CasePartiesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasePartiesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasePartiesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
