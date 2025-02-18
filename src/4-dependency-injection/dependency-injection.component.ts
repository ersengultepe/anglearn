import {Component, OnInit} from '@angular/core';
import {NavigationComponent} from '../shared/navigation.component';
import {DiService} from './di.service';

@Component({
  selector: "app-dI",
  template: `

    <app-navigation [routeTitle]="'Dependency Injection'" [parRoute]="'dependency-injection'"></app-navigation>

  `,
  imports: [
    NavigationComponent
  ],
  standalone: true
})

export class DependencyInjectionComponent {

}
