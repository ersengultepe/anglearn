import {Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  template: `
    <button (click)="degistir()">Değiştir</button>
    <app-child [deger]="mesaj"></app-child>
  `
})
export class ParentComponent {
  mesaj = 'Başlangıç değeri';

  degistir() {
    this.mesaj = 'Yeni değer ' + Math.random();
  }
}
