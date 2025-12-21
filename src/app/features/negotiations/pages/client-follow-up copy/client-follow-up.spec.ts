import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFollowUp } from './client-follow-up';

describe('ClientFollowUp', () => {
  let component: ClientFollowUp;
  let fixture: ComponentFixture<ClientFollowUp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFollowUp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFollowUp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
