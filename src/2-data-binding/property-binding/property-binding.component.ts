import { Component } from '@angular/core';
import {ChildPropComponent} from './child.component';

@Component({
  selector: 'app-property-binding',
  imports: [
    ChildPropComponent
  ],
  template: `
    <h4>Samsung SSD</h4>
    <app-child-prop [price]="3000"></app-child-prop>

    <h4>ATX KASA</h4>
    <app-child-prop [price]="120" [currency]="'$'"></app-child-prop>
  `,
  standalone: true,
})
export class PropertyBindingComponent {

}
