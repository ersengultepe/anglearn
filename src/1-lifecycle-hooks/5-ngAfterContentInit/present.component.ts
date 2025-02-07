import {Component} from '@angular/core';
import {RestaurantComponent} from './restaurant.component';
import {MenuComponent} from './menu.component';

@Component({
  selector: 'app-present',
  imports: [
    RestaurantComponent,
    MenuComponent
  ],
  template: `
    <app-restaurant>
      <app-menu></app-menu>
    </app-restaurant>`
})

export class PresentComponent {

}
