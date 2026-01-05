import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/electron.service';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AuthService } from './core/services/auth';
import { AppTitlebar } from './layout/component/app.titlebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AppTitlebar, CommonModule],
  template: `
    <app-titlebar></app-titlebar>
    <router-outlet></router-outlet>
  `
})
export class App implements OnInit {
  isElectron = !!(window as any).appWindow;
  constructor(
    public es: ElectronService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    if (this.isElectron) {
      document.body.classList.add('electron-mode');
    }
    // Initialize SignalR connection if user is logged in (for "one device" check)
    this.authService.initSignalRIfLoggedIn();
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap((route: ActivatedRoute) => route.data)
      )
      .subscribe((data: any) => {
        const title = data['title'] ? ` ${data['title']}` : 'بيت القانون';
        this.titleService.setTitle(title);
      });
  }

}
