import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-attribute',
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './attribute.component.html',
  styles: [
    `
      .big {
        font-size: 40px
      }

      .small {
        font-size: 15px;
      }

      .textDanger {
        color: blue;
      }

      .fontWeightBold {
        font-weight: bold;
      }

      .bgYellow {
        background-color: yellow;
      }
    `
  ],
  standalone: true
})
export class AttributeComponent {
  myClasses = {
    'textDanger': false,
    'fontWeightBold':true,
    'bgYellow':true
  }
  isActive:boolean = true

  constructor() {
    this.myClasses.bgYellow = false
  }
}
