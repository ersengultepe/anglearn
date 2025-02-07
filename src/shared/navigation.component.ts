import {Component, Input} from '@angular/core';
import {routes} from '../app/app.routes';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  template:
    `
      <ul>
        @for (route of routes; track route) {
          @if (route.path == parRoute) {
            @for (childRoute of route.children; track childRoute) {
              <li>
                <a [routerLink]="childRoute.path">
                  {{ childRoute.data?.['title'] }}
                </a>
              </li>
            }
          }
        }
      </ul>
      <router-outlet></router-outlet>
    `
})

export class NavigationComponent {
  protected readonly routes = routes;
  @Input() parRoute:string = ''
}
