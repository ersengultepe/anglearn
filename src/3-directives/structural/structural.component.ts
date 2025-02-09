import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'app-structural',
  imports: [
    NgIf,
    NgForOf,
    NgSwitch,
    NgSwitchCase
  ],
  templateUrl: './structural.component.html',
  standalone: true
})
export class StructuralComponent {
  isView:boolean = true
  showHello: boolean = true;
  showGoodbye: boolean = false;

  fruits:string[] = ['apple', 'orange', 'banana', 'watermelon']

  selectedRole:string = 'secretary'
  roles:string[] = ['director', 'secretary', 'administrator']
  isLoggedIn: boolean = false;
  colors = ["Red", "Blue", "White"];

  courses = [
    { id: 1, name: "Angular For Beginners" },
    { id: 2, name: "Angular Core Deep Dive" },
    { id: 3, name: "Angular Forms In Depth" },
  ];
  currency:string = '₺'
}
