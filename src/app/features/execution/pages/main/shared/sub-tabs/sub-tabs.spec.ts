import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTabs } from './sub-tabs';

describe('SubTabs', () => {
  let component: SubTabs;
  let fixture: ComponentFixture<SubTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
