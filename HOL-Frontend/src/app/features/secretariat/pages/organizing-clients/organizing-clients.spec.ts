import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizingClients } from './organizing-clients';

describe('OrganizingClients', () => {
  let component: OrganizingClients;
  let fixture: ComponentFixture<OrganizingClients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizingClients]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizingClients);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
