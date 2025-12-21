import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesFifaExport } from './files-fifa-export';

describe('FilesFifaExport', () => {
  let component: FilesFifaExport;
  let fixture: ComponentFixture<FilesFifaExport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilesFifaExport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesFifaExport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
