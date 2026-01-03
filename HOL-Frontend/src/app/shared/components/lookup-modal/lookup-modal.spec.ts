import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupModal } from './lookup-modal';

describe('LookupModal', () => {
  let component: LookupModal;
  let fixture: ComponentFixture<LookupModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LookupModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookupModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
