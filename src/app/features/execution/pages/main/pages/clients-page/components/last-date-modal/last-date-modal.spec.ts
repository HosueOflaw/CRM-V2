import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateModal } from './last-date-modal';

describe('DateModal', () => {
  let component: DateModal;
  let fixture: ComponentFixture<DateModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
