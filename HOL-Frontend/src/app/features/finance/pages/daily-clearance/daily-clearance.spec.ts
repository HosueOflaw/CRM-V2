import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyClearance } from './daily-clearance';

describe('DailyClearance', () => {
  let component: DailyClearance;
  let fixture: ComponentFixture<DailyClearance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyClearance]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyClearance);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
