import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {concatMap, delay, of} from 'rxjs';

@Component({
  selector: "app-rxjs-concatmap",
  template: ``,
  standalone: true
})

/**
 * concatMap Operatörü
 * 📌 concatMap Nedir?
 * concatMap, RxJS'in bir higher-order mapping operatörüdür ve bir kaynaktan gelen değerleri sıralı bir şekilde işler.
 * Önceki işlemi tamamlamadan yeni bir işlemi başlatmaz.
 * Yani, işlemler sırayla gerçekleştirilir ve bir önceki tamamlanmadan bir sonraki işleme alınmaz.
 *
 * 🔹 Temel Kullanım Alanları:
 * HTTP İsteklerini sırayla yapmak (örneğin, bir kullanıcının işlemlerini sıralı olarak yürütmek).
 * Asenkron işlemleri sıralı hale getirmek (örneğin, birden fazla API çağrısını belirli bir sırayla gerçekleştirmek).
 * Veritabanı işlemlerini sırayla işlemek (örneğin, bir kayıt tamamlanmadan diğerine geçmemek).
 * 📌 Nasıl Çalışır?
 * concatMap, her bir kaynak Observable'dan gelen değeri alır ve onu bir iç Observable'a dönüştürür.
 * İç Observable tamamlanmadan bir sonraki değeri işlemez.
 */
export class ConcatmapComponent{
  constructor(private http:HttpClient) {
    this.sequentialOperations();
    this.sequentialProcess()
  }

  private sequentialOperations() {
    const userIds = [1, 2, 3, 4, 5]

    of(...userIds).pipe(
      concatMap(userId => this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`))
    ).subscribe(user => console.log("kullanıcı", user));
  }

  private sequentialProcess(){
    of("İşlem 1", "İşlem 2", "İşlem 3").pipe(
      concatMap(task => of(`${task} tamamlandı`).pipe(delay(1000)))
    ).subscribe(result => console.log(result))
  }
}
