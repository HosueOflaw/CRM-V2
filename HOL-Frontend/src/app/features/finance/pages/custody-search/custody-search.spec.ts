import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustodySearch } from './custody-search';

describe('CustodySearch', () => {
  let component: CustodySearch;
  let fixture: ComponentFixture<CustodySearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustodySearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustodySearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
