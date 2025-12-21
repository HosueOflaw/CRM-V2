import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementForm } from './statement-form';

describe('StatementForm', () => {
  let component: StatementForm;
  let fixture: ComponentFixture<StatementForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatementForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
