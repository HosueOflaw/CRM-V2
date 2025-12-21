import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientForm } from './add-client-form';

describe('AddClientForm', () => {
  let component: AddClientForm;
  let fixture: ComponentFixture<AddClientForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddClientForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
