import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import {ImageService} from './image.service';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-image',
  template: `
    <img *ngIf="imageUrl" [src]="imageUrl" alt="Yüklenen Resim"/> <br>
    <input type="text" [(ngModel)]="qrStr" placeholder="Merhaba!">
    <button (click)="loadImage()">Resmi Yeniden Yükle</button>
  `,
  standalone: true,
  styleUrls: ['./image.component.css'],
  imports: [
    NgIf,
    FormsModule
  ],
})
export class ImageComponent implements OnInit {
  imageUrl: SafeUrl | null = null; // Resmin güvenli URL'si
  qrStr!: string;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadImage();
  }

  loadImage(): void {
    this.imageService.getImage(this.qrStr).subscribe({
      next: (blob: Blob) => {
        const objectURL = URL.createObjectURL(blob); // Blob'u geçici URL'ye çevir
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL); // Güvenli URL'ye çevir
      },
      error: (err: any) => console.error('Resim yüklenirken hata oluştu:', err)
    });
  }
}
