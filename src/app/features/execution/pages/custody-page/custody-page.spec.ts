import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustodyPage } from './custody-page';

describe('CustodyPage', () => {
  let component: CustodyPage;
  let fixture: ComponentFixture<CustodyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustodyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
