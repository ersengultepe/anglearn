import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-structural',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './structural.component.html',
  styles: [
    `
        .big{
          font-size: 40px
        }
        .small{
          font-size: 15px;
        }

        .textDanger{
          color:blue;
        }
        .fontWeightBold{
          font-weight: bold;
        }
        .bgYellow{
          background-color: yellow;
        }
    `
  ],
  standalone: true
})
export class StructuralComponent {
    myClasses = {
      'textDanger': false,
      'fontWeightBold':true,
      'bgYellow':true
    }
    isActive:boolean = true
    fruits:string[] = ['apple', 'orange', 'banana', 'watermelon']
    roles:string[] = ['director', 'secretary', 'administrator']

    constructor() {
      this.myClasses.bgYellow = false
    }
}
