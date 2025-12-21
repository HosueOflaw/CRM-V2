import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsZainTwentyMonths } from './reports-zain-twenty-months';

describe('ReportsZainTwentyMonths', () => {
  let component: ReportsZainTwentyMonths;
  let fixture: ComponentFixture<ReportsZainTwentyMonths>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsZainTwentyMonths]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsZainTwentyMonths);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
