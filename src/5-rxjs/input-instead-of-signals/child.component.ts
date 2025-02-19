import {Component, input} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Child Component</h3>
    <p>Parent dan Gelen : {{ inputName() }}</p>
  `
})
export class ChildComponent {

  inputName = input<string>('Merhaba Dünya');

}
