import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { themeSettings } from './theme-settings';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private mode = new BehaviorSubject<'light' | 'dark'>('dark');
  public mode$ = this.mode.asObservable();

  get currentMode() {
    return this.mode.value;
  }

  toggleMode() {
    const newMode = this.mode.value === 'light' ? 'dark' : 'light';
    this.mode.next(newMode);
    this.applyTheme(newMode);
  }

  applyTheme(mode: 'light' | 'dark') {
    const theme = themeSettings(mode);

    document.documentElement.style.setProperty('--primary', theme.palette.primary.main);
    document.documentElement.style.setProperty('--background', theme.palette.background.default);
    document.documentElement.style.setProperty('--text', theme.palette.text.primary);
  }
}
