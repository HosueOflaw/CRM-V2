import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionStatementsPage } from './execution-statements-page';

describe('ExecutionStatementsPage', () => {
  let component: ExecutionStatementsPage;
  let fixture: ComponentFixture<ExecutionStatementsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExecutionStatementsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionStatementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
