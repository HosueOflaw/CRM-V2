import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentCollection } from './installment-collection';

describe('InstallmentCollection', () => {
  let component: InstallmentCollection;
  let fixture: ComponentFixture<InstallmentCollection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstallmentCollection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstallmentCollection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
