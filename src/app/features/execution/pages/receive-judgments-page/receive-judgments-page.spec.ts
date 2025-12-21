import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveJudgmentsPage } from './receive-judgments-page';

describe('ReceiveJudgmentsPage', () => {
  let component: ReceiveJudgmentsPage;
  let fixture: ComponentFixture<ReceiveJudgmentsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiveJudgmentsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveJudgmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
