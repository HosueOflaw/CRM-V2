import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovenantReview } from './covenant-review';

describe('CovenantReview', () => {
  let component: CovenantReview;
  let fixture: ComponentFixture<CovenantReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CovenantReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovenantReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
