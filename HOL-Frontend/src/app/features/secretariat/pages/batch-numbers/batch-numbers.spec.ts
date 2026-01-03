import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchNumbers } from './batch-numbers';

describe('BatchNumbers', () => {
  let component: BatchNumbers;
  let fixture: ComponentFixture<BatchNumbers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatchNumbers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatchNumbers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
