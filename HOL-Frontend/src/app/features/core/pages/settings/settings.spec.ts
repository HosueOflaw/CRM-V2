import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings'; // ✅ اسم الكومبوننت الصحيح

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsComponent], // ✅ استخدم SettingsComponent
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
