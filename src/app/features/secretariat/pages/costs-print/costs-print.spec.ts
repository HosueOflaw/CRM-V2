import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsPrint } from './costs-print';

describe('CostsPrint', () => {
  let component: CostsPrint;
  let fixture: ComponentFixture<CostsPrint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CostsPrint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostsPrint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
