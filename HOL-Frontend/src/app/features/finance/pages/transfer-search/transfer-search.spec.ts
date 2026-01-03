import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSearch } from './transfer-search';

describe('TransferSearch', () => {
  let component: TransferSearch;
  let fixture: ComponentFixture<TransferSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
