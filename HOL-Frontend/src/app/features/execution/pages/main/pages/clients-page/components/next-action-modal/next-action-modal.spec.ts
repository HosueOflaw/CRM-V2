import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextActionModal } from './next-action-modal';

describe('NextActionModal', () => {
  let component: NextActionModal;
  let fixture: ComponentFixture<NextActionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextActionModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextActionModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
