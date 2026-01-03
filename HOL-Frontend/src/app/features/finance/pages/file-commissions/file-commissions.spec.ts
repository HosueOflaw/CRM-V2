import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCommissions } from './file-commissions';

describe('FileCommissions', () => {
  let component: FileCommissions;
  let fixture: ComponentFixture<FileCommissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileCommissions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileCommissions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
