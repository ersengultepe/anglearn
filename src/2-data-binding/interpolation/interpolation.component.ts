import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  template: `{{title}}`,
  standalone: true,
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {
  public title:string = 'TITLE'
}
