import { Component, DoCheck } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>ngDoCheck() Örneği</h2>
      <input type="text" [(ngModel)]="userInput" placeholder="Bir şeyler yaz...">
      <p>Girilen Değer: {{ userInput }}</p>
    </div>
  `,
  imports: [
    FormsModule
  ],
  styleUrls: ['./app.component.css']
})
export class InputChangeComponent implements DoCheck {
  userInput: string = '';

  constructor() {
    console.log("Constructor çalıştı!");
  }

  ngDoCheck() {
    console.log("ngDoCheck() çalıştı! - Kullanıcı input değiştirdi mi?");
  }
}
