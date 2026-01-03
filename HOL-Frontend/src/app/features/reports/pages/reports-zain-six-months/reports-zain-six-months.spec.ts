import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsZainSixMonths } from './reports-zain-six-months.component';

describe('ReportsZainSixMonths', () => {
  let component: ReportsZainSixMonths;
  let fixture: ComponentFixture<ReportsZainSixMonths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsZainSixMonths]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsZainSixMonths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
