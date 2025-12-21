import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { AppLayout } from './app.layout';
import { LayoutService } from '../service/layout.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppLayout', () => {
  let component: AppLayout;
  let fixture: ComponentFixture<AppLayout>;
  let layoutService: LayoutService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLayout, RouterTestingModule],
      providers: [LayoutService, Renderer2]
    }).compileComponents();

    fixture = TestBed.createComponent(AppLayout);
    component = fixture.componentInstance;
    layoutService = TestBed.inject(LayoutService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have layout service', () => {
    expect(component.layoutService).toBeTruthy();
  });

  it('should hide menu when outside clicked', () => {
    const event = new MouseEvent('click');
    spyOn(component, 'isOutsideClicked').and.returnValue(true);
    spyOn(component, 'hideMenu');
    
    component.menuOutsideClickListener(event);
    
    expect(component.hideMenu).toHaveBeenCalled();
  });

  it('should block body scroll when mobile menu is active', () => {
    layoutService.layoutState.update(prev => ({ ...prev, staticMenuMobileActive: true }));
    spyOn(component, 'blockBodyScroll');
    
    layoutService.overlayOpen$.next(null);
    
    expect(component.blockBodyScroll).toHaveBeenCalled();
  });
});

