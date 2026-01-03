import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTabs } from './top-tabs';

describe('TopTabs', () => {
  let component: TopTabs;
  let fixture: ComponentFixture<TopTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
