import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imageUrl = `https://api.qrserver.com/v1/create-qr-code/?data=`; // API URL'sini buraya yaz
  private imageSize = '&size=100x100'

  constructor(private http: HttpClient) {}

  getImage(qrStr:string): Observable<Blob> {
    return this.http.get(this.imageUrl+qrStr+this.imageSize, { responseType: 'blob' }); // 🔥 Blob formatında isteği gönder
  }
}
