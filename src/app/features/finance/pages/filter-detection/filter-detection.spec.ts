import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDetection } from './filter-detection';

describe('FilterDetection', () => {
  let component: FilterDetection;
  let fixture: ComponentFixture<FilterDetection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterDetection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDetection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
