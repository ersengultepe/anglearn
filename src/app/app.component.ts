import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from '@angular/common';
import {routes} from './app.routes';
import {Card} from 'primeng/card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgForOf, Card],
  template: `

    <p-card header="Angular Learning" [style]="{
        border: '2px solid white',
        borderRadius: '15px',
        width: '30rem',
        color: 'gray',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }">
      <ul style="list-style-type: none">
        <li *ngFor="let route of routes">
          <a [routerLink]="route.path">
            <h3 style="text-transform: capitalize">
              {{route.path}}
            </h3>
          </a>
        </li>
      </ul>
    </p-card>

    <router-outlet></router-outlet>
  `,
  standalone: true,
  styleUrl: "app.component.css"
})
export class AppComponent {
  constructor() {
  }
  title = 'anglearn';
  protected readonly routes = routes;
}
