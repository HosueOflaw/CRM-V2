import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Judgment } from './judgment';

describe('Judgment', () => {
  let component: Judgment;
  let fixture: ComponentFixture<Judgment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Judgment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Judgment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
