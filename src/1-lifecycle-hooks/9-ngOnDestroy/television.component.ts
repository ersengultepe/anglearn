import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-television',
  template: `
    <h3>Televizyon</h3>
    <div>
      <img ngSrc="{{ 'https://picsum.photos/200/300?random=' + currentChannel }}" alt="" width="300" height="300">
    </div>
  `,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  standalone: true,
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit, OnDestroy {
  private channelInterval: any;
  currentChannel: number = 1;
  isView: boolean = true;

  constructor() {
    console.log("📺 Televizyon açılıyor...");
  }

  ngOnInit() {
    console.log("✅ Sinyal alınıyor, görüntü gösteriliyor...");

    // Kanal değişimini simüle eden bir zamanlayıcı başlatıyoruz.
    this.channelInterval = setInterval(() => {
      this.currentChannel++;
      this.isView = false;
      console.log(`📡 Şu anki kanal: ${this.currentChannel}`);
      setTimeout(() => {
        this.isView = true;
      }, 1500)
    }, 2000);
  }

  ngOnDestroy() {
    console.log("❌ Televizyon kapatılıyor, bağlantılar kesiliyor...");
    // Bellek sızıntısını önlemek için zamanlayıcıyı temizliyoruz.
    clearInterval(this.channelInterval);
  }
}
