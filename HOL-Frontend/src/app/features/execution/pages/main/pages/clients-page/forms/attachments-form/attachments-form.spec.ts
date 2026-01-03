import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentsForm } from './attachments-form';

describe('AttachmentsForm', () => {
  let component: AttachmentsForm;
  let fixture: ComponentFixture<AttachmentsForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachmentsForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachmentsForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
