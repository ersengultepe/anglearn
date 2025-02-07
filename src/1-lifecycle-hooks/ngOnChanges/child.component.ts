import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <p>Gelen değer: {{ deger }}</p>
  `
})
export class ChildComponent implements OnChanges {
  @Input() deger!: string;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges Çalıştı!', changes);
    if (changes['deger']) {
      console.log(changes['deger'].previousValue);
      console.log(changes['deger'].currentValue);
    }
  }
}
