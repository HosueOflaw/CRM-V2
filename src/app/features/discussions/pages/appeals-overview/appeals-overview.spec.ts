import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppealsOverview } from './appeals-overview';

describe('AppealsOverview', () => {
  let component: AppealsOverview;
  let fixture: ComponentFixture<AppealsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppealsOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppealsOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
