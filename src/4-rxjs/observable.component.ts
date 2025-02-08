import {Component} from '@angular/core';
import {catchError, observable, Observable, throwError, throwIfEmpty} from 'rxjs';
import {NavigationComponent} from '../shared/navigation.component';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';

@Component({
  selector: "app-observables",
  template: `

    <app-navigation [parRoute]="'rxjs'"></app-navigation>

      {{valueA}}
  `,
  imports: [
    NavigationComponent
  ],
  standalone: true
})

export class ObservableComponent{
  valueA!:any
  constructor() {
    this.obsExam1();
    this.obsExam2()
  }

  private obsExam1() {
    const observable = new Observable(observer => {
      observer.next('Veri 1');
      observer.next('Veri 2');
      //observer.error("Hata Oluştu")
      setTimeout(
        () => {
          observer.next('Veri 3')
          observer.complete()
        },
        1000);
    });

    observable.subscribe({
      next: (value) => {
        this.valueA = value
        console.log(value) // Veri geldiğinde çalışır
      },
      error: err => console.error('Hata:', err), // Hata oluşursa çalışır
      complete: () => console.log('Tamamlandı!') // Akış tamamlanınca çalışır
    });
  }

  private obsExam2(){
    let observable = new Observable(observer => {
      observer.next(1)
      observer.next(2)
      observer.next(99)
      observer.next(87)
      observer.complete()
    })

    observable
      .pipe(
      catchError(error => {
        console.log("Hata oluştu", error);
        return throwError(() => new Error("Sunucu Hatası !"));
      })
    )
      .subscribe({
        next: data => console.log(data),
        error: err => console.log(err),
        complete: () => console.log('işlem tamamlandı !')
      })

  }
}
