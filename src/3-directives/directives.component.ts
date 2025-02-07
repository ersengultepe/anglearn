import {Component} from '@angular/core';
import {NavigationComponent} from '../shared/navigation.component';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    NavigationComponent
  ],
  template: `
    <h3>Direktives</h3>
    <app-navigation [parRoute]="'directives'"></app-navigation>
  `
})

export class DirectivesComponent{

}
