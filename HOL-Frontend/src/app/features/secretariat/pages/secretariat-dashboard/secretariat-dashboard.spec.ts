import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretariatDashboard } from './secretariat-dashboard';

describe('SecretariatDashboard', () => {
  let component: SecretariatDashboard;
  let fixture: ComponentFixture<SecretariatDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecretariatDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretariatDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
