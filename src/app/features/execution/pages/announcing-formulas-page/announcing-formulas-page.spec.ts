import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncingFormulasPage } from './announcing-formulas-page';

describe('AnnouncingFormulasPage', () => {
  let component: AnnouncingFormulasPage;
  let fixture: ComponentFixture<AnnouncingFormulasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncingFormulasPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnouncingFormulasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
