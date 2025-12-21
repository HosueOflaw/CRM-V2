import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFileReceipt } from './client-file-receipt';

describe('ClientFileReceipt', () => {
  let component: ClientFileReceipt;
  let fixture: ComponentFixture<ClientFileReceipt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFileReceipt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFileReceipt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
