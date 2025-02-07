import {Component, Input, AfterViewInit, ViewChild, ElementRef, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cargo-detail',
  imports: [
    NgIf
  ],
  template: `
    <div #kargoDetayDiv>
      <p *ngIf="kargoDurumu">Kargo Durumu: {{ kargoDurumu }}</p>
      <p *ngIf="!kargoDurumu">Kargo durumu yükleniyor...</p>
    </div>
  `
})
export class CargoDetailComponent implements AfterViewInit {
  @Input() trackingNumber: string = ''; // Parent'ten gelen kargo takip numarası
  @ViewChild('kargoDetayDiv') kargoDetayDiv!: ElementRef; // Kargo durumu görüntülenmesi için view elementine referans

  kargoDurumu: string = '';

  ngAfterViewInit() {
    // Kargo detayı view'da tamamen yüklendikten sonra çalışır
    this.getKargoDurumu(this.trackingNumber);
  }

  getKargoDurumu(trackingNumber: string) {
    // Burada bir API çağrısı yapabiliriz. Örneğin:
    setTimeout(() => {
      // Kargo durumu başarılı bir şekilde alındığında simüle edelim
      this.kargoDurumu = 'Kargo Yolda'; // API'den gelen yanıt gibi
      console.log('Kargo Durumu: ', this.kargoDurumu);
    }, 2000); // 2 saniye sonra kargo durumu yükleniyor
  }
}
