import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarManagementMain } from './car-management-main';

describe('CarManagementMain', () => {
  let component: CarManagementMain;
  let fixture: ComponentFixture<CarManagementMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarManagementMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarManagementMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
