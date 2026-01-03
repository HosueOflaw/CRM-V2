import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeNotLoad } from './office-not-load';

describe('OfficeNotLoad', () => {
  let component: OfficeNotLoad;
  let fixture: ComponentFixture<OfficeNotLoad>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeNotLoad]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeNotLoad);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
