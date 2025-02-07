import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [
    FormsModule
  ],
  template: `
    <h3>Kişisel Bilgiler</h3>
    <input type="text" [(ngModel)]="name" placeholder="Adınız"> <br>
    <input type="text" [(ngModel)]="surname" placeholder="Soyadınız"> <br>
    <input type="text" [(ngModel)]="age" placeholder="Yaşınız"> <br>

    Adınız : <span>{{name}}</span> <br>
    Soyadınız : <span>{{surname}}</span> <br>
    Yaşınız : <span>{{age}}</span> <br>

    <input type="button" value="Yaş arttır" (click)="ageIncrease()">
  `,
  standalone: true,
  styles: [`
    input{
      margin:10px;
      height: 25px;
    }
    span{
      color:green;
      font-weight: bolder;
      text-transform: capitalize;
    }
  `]
})
export class TwoWayBindingComponent {
    name!:string
    surname!:string
    age!:number

  ageIncrease() {
    this.age = +this.age + 1
    //this.age += 1
  }
}
