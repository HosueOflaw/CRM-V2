import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kashf } from './kashf';

describe('Kashf', () => {
  let component: Kashf;
  let fixture: ComponentFixture<Kashf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kashf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kashf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
