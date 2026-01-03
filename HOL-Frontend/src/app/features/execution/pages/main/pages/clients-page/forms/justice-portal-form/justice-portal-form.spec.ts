import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JusticePortalForm } from './justice-portal-form';

describe('JusticePortalForm', () => {
  let component: JusticePortalForm;
  let fixture: ComponentFixture<JusticePortalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JusticePortalForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JusticePortalForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
