import {Component} from '@angular/core';
import {NavigationComponent} from '../shared/navigation.component';

@Component({
  selector: 'form',
  template: `
    <app-navigation [parRoute]="'forms'" [routeTitle]="'Forms'"></app-navigation>
  `,
  imports: [
    NavigationComponent
  ],
  standalone: true
})

export class FormComponent {

}
