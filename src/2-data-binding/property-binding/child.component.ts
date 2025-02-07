import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child-prop',
  standalone: true,
  template: `
    {{price}}{{currency}}
  `
})

export class ChildPropComponent{
  @Input() price!:number
  @Input() currency:string = '₺'
}
