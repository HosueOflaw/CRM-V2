import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryAboutStatement } from './inquiry-about-statement';

describe('InquiryAboutStatement', () => {
  let component: InquiryAboutStatement;
  let fixture: ComponentFixture<InquiryAboutStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquiryAboutStatement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiryAboutStatement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
