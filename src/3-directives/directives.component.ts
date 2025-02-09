import {Component} from '@angular/core';
import {NavigationComponent} from '../shared/navigation.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  template: `
    <app-navigation [routeTitle]="'Directives'" [parRoute]="'directives'"></app-navigation>
  `
})

export class DirectivesComponent{

}
