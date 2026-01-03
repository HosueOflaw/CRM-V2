import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDateModal } from './next-date-modal';

describe('NextDateModal', () => {
  let component: NextDateModal;
  let fixture: ComponentFixture<NextDateModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextDateModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextDateModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
