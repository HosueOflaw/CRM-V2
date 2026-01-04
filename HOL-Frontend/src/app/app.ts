import { Component, OnInit } from '@angular/core';
import { ElectronService } from './core/electron.service';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { Title } from '@angular/platform-browser';

import { AuthService } from './core/services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `<router-outlet></router-outlet>`
})
export class App implements OnInit {
  constructor(
    public es: ElectronService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    // Initialize SignalR connection if user is logged in (for "one device" check)
    this.authService.initSignalRIfLoggedIn();
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        const title = data['title'] ? ` ${data['title']}` : 'بيت القانون';
        this.titleService.setTitle(title);
      });
  }

}
