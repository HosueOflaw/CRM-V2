import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtModal } from './court-modal';

describe('CourtModal', () => {
  let component: CourtModal;
  let fixture: ComponentFixture<CourtModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
