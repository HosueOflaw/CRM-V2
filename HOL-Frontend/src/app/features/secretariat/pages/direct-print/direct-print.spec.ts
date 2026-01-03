import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectPrint } from './direct-print';

describe('DirectPrint', () => {
  let component: DirectPrint;
  let fixture: ComponentFixture<DirectPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectPrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectPrint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
