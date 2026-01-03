import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationForm } from './classification-form';

describe('ClassificationForm', () => {
  let component: ClassificationForm;
  let fixture: ComponentFixture<ClassificationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassificationForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
