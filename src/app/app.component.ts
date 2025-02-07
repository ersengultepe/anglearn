import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf} from '@angular/common';
import {routes} from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, RouterLink],
  templateUrl: './app.component.html',
 /* template: `

    <router-outlet />

    <ul>
      <li *ngFor="let route of routes">
        <a [routerLink]="route.path">{{route.path}}</a>
      </li>
    </ul>

    `,*/
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    console.log("fff", routes[0]['path'])
  }
  title = 'anglearn';
  protected readonly routes = routes;
}
