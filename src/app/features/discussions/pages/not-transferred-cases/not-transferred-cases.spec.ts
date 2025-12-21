import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotTransferredCases } from './not-transferred-cases';

describe('NotTransferredCases', () => {
  let component: NotTransferredCases;
  let fixture: ComponentFixture<NotTransferredCases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotTransferredCases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotTransferredCases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
