import {Component} from '@angular/core';
import {NavigationComponent} from '../shared/navigation.component';

@Component({
  selector: "app-rxjs",
  standalone: true,
  imports: [
    NavigationComponent
  ],
  template: `
    <h2>RxJS Operators</h2>
    <app-navigation [parRoute]="'rxjs'"></app-navigation>
  `
})

export class RxjsComponent{

}
