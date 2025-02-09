import {Component} from '@angular/core';
import {map, of, tap} from 'rxjs';

@Component({
  selector: "app-rxjs-tap",
  template: ``,
  standalone: true
})
/**
 * 📌 RxJS tap Operatörü (En Güncel Haliyle)
 *
 * 🔹 tap, observable’ın akışına müdahale etmeden, ara işlemler yapmamıza olanak tanıyan bir operatördür.
 * 🔹 Veriyi değiştirmez, sadece yan etkiler (side effects) oluşturur.
 * 🔹 Logging, debugging, performans ölçümü veya ek işlemler yapmak için idealdir.
 * 🔹 Pipe zinciri içinde bir ara noktada kullanılabilir.
 */
export class TapComponent{
  constructor() {
    this.numberTap();
    this.tapAndMapDifferent()
  }

  private numberTap() {
    of(1, 2, 3, 4).pipe(
      tap(value => console.log("Veri alındı", value))
    ).subscribe({
      next: data => console.log("Abone olundu", data)
    })
  }

  private tapAndMapDifferent(){
    of(1, 2, 3).pipe(
      tap(value => console.log("Orijinal veri:", value)), // Veriyi değiştirmez
      map(value => value * 2), // Veriyi değiştirir
      tap(value => console.log("Çarpılmış veri:", value))
    ).subscribe();
  }
}
