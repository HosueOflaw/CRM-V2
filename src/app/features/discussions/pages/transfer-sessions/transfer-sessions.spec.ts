import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSessions } from './transfer-sessions';

describe('TransferSessions', () => {
  let component: TransferSessions;
  let fixture: ComponentFixture<TransferSessions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferSessions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferSessions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
