import { TestBed } from '@angular/core/testing';
import { LayoutService } from './layout.service';

describe('LayoutService', () => {
  let service: LayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle dark mode', () => {
    const initialDarkTheme = service.layoutConfig().darkTheme;
    service.layoutConfig.update(state => ({ ...state, darkTheme: !state.darkTheme }));
    
    expect(service.layoutConfig().darkTheme).toBe(!initialDarkTheme);
  });

  it('should toggle menu', () => {
    const initialState = service.layoutState().staticMenuDesktopInactive;
    service.onMenuToggle();
    
    expect(service.layoutState().staticMenuDesktopInactive).toBe(!initialState);
  });

  it('should detect desktop', () => {
    spyOnProperty(window, 'innerWidth', 'get').and.returnValue(1200);
    expect(service.isDesktop()).toBe(true);
  });

  it('should detect mobile', () => {
    spyOnProperty(window, 'innerWidth', 'get').and.returnValue(800);
    expect(service.isMobile()).toBe(true);
  });
});

