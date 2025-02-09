import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgForOf, NgStyle} from '@angular/common';
import {routes} from './app.routes';
import {Button} from 'primeng/button';
import {Card} from 'primeng/card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NgForOf, Button, Card, NgStyle],
  template: `

    <p-card header="Angular Learning" [styleClass]="'custom-card'">
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
