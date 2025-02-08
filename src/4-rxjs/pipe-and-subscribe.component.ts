import {Component} from '@angular/core';
import {filter, map, Observable, of} from 'rxjs';

@Component({
  selector: 'app-obsv-pipe',
  template: ``,
  standalone: true
})

export class PipeAndSubscribeComponent {
  constructor() {
    const streamNumbers$:Observable<number> = of(1,2,3,4,5,6)

    let filteredNumbers = streamNumbers$.pipe(
        filter(value => value % 2 === 1),
        map(value => `Gelen Sayı ${value}`)
      )

    filteredNumbers.subscribe({
      next: data => console.log(data),
      error: err => console.log("Hata oluştu", err.message())
    })

  }
}
