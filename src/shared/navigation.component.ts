import {Component, Input} from '@angular/core';
import {routes} from '../app/app.routes';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Card} from 'primeng/card';

@Component({
  selector: "app-navigation",
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    Card
  ],
  template:
    `
      <p-card header="{{routeTitle}}">
        <ul style="list-style-type: none">
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
      </p-card>

      <router-outlet></router-outlet>
    `
})

export class NavigationComponent {
  protected readonly routes = routes;
  @Input() parRoute:string = ''
  @Input() routeTitle:string = ''
}
