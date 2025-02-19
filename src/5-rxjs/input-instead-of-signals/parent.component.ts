import {Component} from '@angular/core';
import {ChildComponent} from './child.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [
    ChildComponent,
    FormsModule
  ],
  template: `
    <h2>Parent Component</h2>
    <input type="text" [(ngModel)]="name">

    <app-child [inputName]="name" />
  `
})
export class ParentComponent {
  name : string = "Ersen Gültepe"
}
