import {Component} from '@angular/core';
import {routes} from '../app/app.routes';
import {NavigationComponent} from '../shared/navigation.component';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  template: `
    <app-navigation [routeTitle]="'Lifecycle Components'" [parRoute]="'lifecycle-hooks'"></app-navigation>
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
