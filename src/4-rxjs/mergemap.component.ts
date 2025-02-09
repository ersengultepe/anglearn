import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, from, mergeMap, of} from 'rxjs';

@Component({
  selector: "app-rxjs-mergemap",
  template: ``,
  standalone: true
})

/**
 * 🚀 RxJS mergeMap Operatörü
 *
 * 🔹 mergeMap, gelen her değere karşılık yeni bir observable açar ve bu observable’ları paralel (aynı anda) çalıştırır.
 * 🔹 Hiçbir işlemi iptal etmez—önceki işlemler devam ederken yenileri de başlar.
 * 🔹 Özellikle bağımsız API istekleri ve paralel işlemler için kullanılır.
 *
 * 📌 mergeMap Ne Zaman Kullanılır?
 *
 * ✅ Aynı anda birden fazla HTTP isteği yapmak için
 * ✅ Büyük veri kümeleriyle çalışırken performansı artırmak için
 * ✅ Gerçek zamanlı olayları eşzamanlı olarak işlemek için
 */
export class MergemapComponent implements OnInit{
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
    this.getUserPostsAndComments()
  }

  private getUsers() {
    const userIds = [1, 2, 3];

    from(userIds) //From: Dizinin her elemanını ayrı ayrı yayar. 1, 2 ve 3 sırayla gelir.
      .pipe(
        mergeMap(id => this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`))
      )
      .subscribe(
        user => console.log('Kullanıcı:', user)
      );
  }

  private getUserPostsAndComments(){
    of(1).pipe(
      mergeMap(userId =>
        forkJoin({ // Tüm API çağrıları tamamlanınca sonuç döndürür. Bütün verileri bir nesne içinde döndürür
          user: this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
          posts: this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        })
      )
    ).subscribe(result => console.log('Sonuç:', result));
  }
}
