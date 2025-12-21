import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAStatement } from './add-a-statement';

describe('AddAStatement', () => {
  let component: AddAStatement;
  let fixture: ComponentFixture<AddAStatement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAStatement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAStatement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
