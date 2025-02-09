import {Component} from '@angular/core';
import {filter, find, first, of} from 'rxjs';

@Component({
  selector: "app-rxjs-filter",
  standalone: true,
  template: ``
})

/**
 * 📌 filter Nedir?
 * 🔹 RxJS filter operatörü, Observable'dan gelen verileri belirli bir koşula göre süzerek yeni bir Observable döndürür.
 * 🔹 Array filter() metoduna benzer, ancak akış (stream) içinde çalışır.
 * 🔹 Gerçek zamanlı veri akışlarını işlemek için çok kullanışlıdır.
 */
export class FilterComponent{
  constructor() {
    //this.numberFilter();
    this.ageFilter()
  }

  private numberFilter() {
    const arr = of(1, 2, 3, 4, 5, 6)
      .pipe(
        filter(x => x % 2 == 1)
      )
      .subscribe({
        next: value => console.log(value),
        error: err => console.log("Hata oluştu", err),
        complete: () => console.log("işlem tamamlandı")
      })
  }

  private ageFilter(){
    const users = [
      {age:20, name:'John Doe'},
      {age:17, name:'Jane Wayne'},
      {age:16, name:'Sarah Zayn'},
      {age:21, name:'Michael night'}
    ]

    of(...users)
      .pipe(
      // first(user => user.age >= 18)
      filter(user => user.age >= 18)
    )
      .subscribe({
        next: value => console.log(value),
        error: err => console.log("Hata oluştu", err),
        complete: () => console.log("işlem tamamlandı")
      })
  }
}
