import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingClients } from './waiting-clients';

describe('WaitingClients', () => {
  let component: WaitingClients;
  let fixture: ComponentFixture<WaitingClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaitingClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitingClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
