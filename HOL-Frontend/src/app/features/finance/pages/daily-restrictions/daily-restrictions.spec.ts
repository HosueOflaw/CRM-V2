import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRestrictions } from './daily-restrictions';

describe('DailyRestrictions', () => {
  let component: DailyRestrictions;
  let fixture: ComponentFixture<DailyRestrictions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyRestrictions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyRestrictions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
