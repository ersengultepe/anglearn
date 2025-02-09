import {Component} from '@angular/core';
import {NavigationComponent} from '../shared/navigation.component';

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

export class DependencyInjectionComponent{

}
