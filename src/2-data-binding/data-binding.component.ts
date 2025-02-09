import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {routes} from '../app/app.routes';
import {NavigationComponent} from '../shared/navigation.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  template: `
    <app-navigation [routeTitle]="'Data Binding Components'" [parRoute]="'data-binding'"></app-navigation>
  `
})
export class DataBindingComponent {
  protected readonly routes = routes;
}
