import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationModel } from './classification-model';

describe('ClassificationModel', () => {
  let component: ClassificationModel;
  let fixture: ComponentFixture<ClassificationModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassificationModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassificationModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
