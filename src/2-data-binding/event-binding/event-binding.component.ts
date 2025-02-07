import { Component } from '@angular/core';
import {ChildEventComponent} from './child-event.component';

@Component({
  selector: 'app-event-binding',
  imports: [
    ChildEventComponent
  ],
  template: `
    <h3>Seçilen Rol: {{role}}</h3>
    <app-child-event (role)="receiveEvent($event)"></app-child-event>
  `,
  standalone: true,
})
export class EventBindingComponent {
    role!:string

  receiveEvent($event: string) {
    this.role = $event.valueOf()
    console.log("parent comp : ", $event.valueOf())
  }
}
