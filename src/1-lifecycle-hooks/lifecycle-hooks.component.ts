import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {routes} from '../app/app.routes';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  template: `
    <ul>
      <li *ngFor="let route of routes[0]['children']">
        <a [routerLink]="route.path">{{ route.data?.['title'] }}</a>
      </li>
    </ul>
  `
})

export class LifecycleHooksComponent {

  /*routesWithTitles: { path: string | undefined; title: any }[] = [];

  1-constructor(private router: Router) {
    this.getRoutesWithTitles();
  }

  getRoutesWithTitles() {
    // Tüm route'ları dolaş ve `data.title` olanları al
    this.routesWithTitles = this.router.config
      .flatMap(route => (route.children ? route.children : [route])) // Nested route'ları düzleştir
      .filter(route => route.data?.['title']) // Sadece title olanları al
      .map(route => ({
        path: route.path,
        title: route.data?.['title']
      }));
  }*/
  protected readonly routes = routes;
}
