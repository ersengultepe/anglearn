import {Component, OnInit} from '@angular/core';
import {PostService} from '../1-lifecycle-hooks/3-ngOnInit/post.service';
import {fromEvent, map, take} from 'rxjs';

@Component({
  selector: 'app-rxjs-map',
  standalone: true,
  template: `
  `
})

export class MapComponent implements OnInit{
  /**
   * RxJS map Operatörü (Güncel ve Detaylı Açıklama)
   *
   * 📌 map Operatörü Nedir?
   * 🔹 map operatörü, gelen veriyi dönüştürmek için kullanılan bir RxJS pipeable operatörüdür.
   * 🔹 Bir Observable’dan gelen her veriyi başka bir formata dönüştürerek yeni bir Observable döndürür.
   * 🔹 Array.prototype.map() metoduna benzer şekilde çalışır, ancak rxjs observable akışı içinde kullanılır.
   *
   * 🛠 Kullanım Formatı
   * observable.pipe(
   *   map(value => yeniDeğer)
   * )
   * 📌 Ne yapar?
   *
   * observable akışından gelen her öğeyi alır.
   * value parametresiyle işlem yapar.
   * Sonucu yeni bir observable olarak yayar.
   *
   * ✅ Temel Kullanım
   * of(1, 2, 3).pipe(
   *   map(x => x * 10) // Her değeri 10 ile çarpar
   * ).subscribe(console.log);
   *
   */
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  private getPosts() {
    this.postService.getPosts()
      .pipe(
        map(posts => posts.slice(0, 5).map(post => post.title)),
      )
      .subscribe({
        next: data => console.log(data),
        error: err => console.log("Hata oluştu", err),
        complete: () => console.log('api çağrısı sonlandı !!!')
      })
  }
}
