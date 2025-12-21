import { ComponentFixture, TestBed } from '@angular/core/testing';
import NegotiationsDashboard from './negotiations-dashboard';


describe('NegotiationsDashboard', () => {
  let component: NegotiationsDashboard;
  let fixture: ComponentFixture<NegotiationsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegotiationsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegotiationsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
