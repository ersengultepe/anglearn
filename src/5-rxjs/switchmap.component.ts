import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, fromEvent, map, Observable, switchMap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {AsyncPipe, NgForOf} from '@angular/common';

interface OpenLibraryResponse {
  docs: Array<{
    title: string;
    first_publish_year: number,
    author_name: string
  }>;
}

@Component({
  selector: "app-rxjs-switchmap",
  template: `
    <input type="text" [formControl]="searchControl" placeholder="Search for products...">
    <ul>
      <li *ngFor="let product of products$ | async">
        <div><strong>Kitabın Adı :</strong>{{ product.title }}</div>
        <div><strong>Yazar Adı : </strong>{{ product.author_name }}</div>
        <div><strong>İlk Yayın Tarihi : </strong>{{ product.first_publish_year }}</div> <br>
        hr
      </li>
    </ul>
  `,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    NgForOf
  ],
  standalone: true
})
/**
 * 📌 RxJS switchMap Operatörü
 *
 * 🔹 switchMap, bir observable içindeki veriye göre yeni bir observable oluşturup, önceki akışı iptal ederek yalnızca sonuncu observable’ın sonucunu yaymak için kullanılır.
 * 🔹 Özellikle HTTP isteklerinde, butona tıklamalar gibi olay bazlı akışlarda kullanılır.
 * 🔹 Önceki isteği iptal ederek yalnızca en güncel olanı işleme devam ettirir.
 *
 * 📝 Kullanım Senaryoları
 *
 * ✅ HTTP çağrılarında önceki istekleri iptal edip, yalnızca en sonuncusunu almak
 * ✅ Kullanıcı aramalarında önceki aramaları iptal etmek
 * ✅ Gerçek zamanlı olayları dinlerken eski verileri bırakmak
 */
export class SwitchmapComponent{
  searchControl = new FormControl();
  products$ = this.searchControl.valueChanges.pipe(
    debounceTime(300), // Kullanıcının yazmayı bitirmesini bekler
    distinctUntilChanged(), // Aynı değer tekrar geldiğinde istek göndermez
    switchMap(query => this.http.get<OpenLibraryResponse>(`https://openlibrary.org/search.json?q=${query}`)), // Yeni istek gönderir, öncekini iptal eder
    map(response => response.docs)
  );

  constructor(private http: HttpClient) {}
}
