import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimValue } from './claim-value';

describe('ClaimValue', () => {
  let component: ClaimValue;
  let fixture: ComponentFixture<ClaimValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
