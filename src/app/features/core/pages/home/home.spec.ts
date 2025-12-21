import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have departments', () => {
    expect(component.departments).toBeDefined();
    expect(component.departments.length).toBeGreaterThan(0);
  });

  it('should have department with route', () => {
    const department = component.departments[0];
    expect(department.route).toBeDefined();
    expect(department.name).toBeDefined();
  });
});

