import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastActionModal } from './last-action-modal';

describe('AstActionModal', () => {
  let component: LastActionModal;
  let fixture: ComponentFixture<LastActionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastActionModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastActionModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
