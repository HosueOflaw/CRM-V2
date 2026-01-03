import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNameDialogComponent } from './select-name-dialog-component';

describe('SelectNameDialogComponent', () => {
  let component: SelectNameDialogComponent;
  let fixture: ComponentFixture<SelectNameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectNameDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
