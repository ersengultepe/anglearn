import { Component } from '@angular/core';
import {NavigationComponent} from '../../shared/navigation.component';

@Component({
  selector: 'app-learn-routing',
  imports: [
    NavigationComponent
  ],
  standalone: true,
  template: `
    <app-navigation [parRoute]="'routing'" [routeTitle]="'Learn Routing'"></app-navigation>
    asdadasd
  `
})
export class LearnRoutingComponent {

}
