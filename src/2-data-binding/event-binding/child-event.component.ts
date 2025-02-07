import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-event',
  standalone: true,
  template: `
    <input type="button" value="Değiştir" (click)="roleChange()">
  `
})

export class ChildEventComponent{
  @Output() role = new EventEmitter<string>();
  roles:string[] = ['müdür', 'sekreter', 'editör', 'koordinator']

  roleChange() {
    let index = Math.floor(Math.random() * 4)

    console.log("child event comp : index", index)

    this.role.emit(this.roles[index])
  }
}
