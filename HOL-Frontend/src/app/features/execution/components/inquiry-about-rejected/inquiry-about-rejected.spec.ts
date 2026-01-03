import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryAboutRejected } from './inquiry-about-rejected';

describe('InquiryAboutRejected', () => {
  let component: InquiryAboutRejected;
  let fixture: ComponentFixture<InquiryAboutRejected>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquiryAboutRejected]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiryAboutRejected);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
