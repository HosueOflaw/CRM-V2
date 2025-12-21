import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionsDashboard } from './discussions-dashboard';

describe('DiscussionsDashboard', () => {
  let component: DiscussionsDashboard;
  let fixture: ComponentFixture<DiscussionsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscussionsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
