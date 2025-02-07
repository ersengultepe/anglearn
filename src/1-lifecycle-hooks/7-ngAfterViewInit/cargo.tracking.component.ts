import {Component, DoCheck, OnChanges, SimpleChanges} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CargoDetailComponent} from './cargo.detail.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cargo-tracking',
  imports: [
    FormsModule,
    CargoDetailComponent,
    NgIf
  ],
  template: `
    <h2>Kargo Takip Sistemi</h2>
    <input [(ngModel)]="trackingNumber" placeholder="Kargo Takip Numarası"/>
    <button (click)="takipEt()">Takip Et</button>

    <app-cargo-detail *ngIf="isButtonClicked" [trackingNumber]="trackingNumber"></app-cargo-detail>
  `
})
export class CargoTrackingComponent implements DoCheck{
  trackingNumber: string = '';
  private oldTrackingnumber:string = '';
  isButtonClicked:boolean = false;

  takipEt() {
    // Kullanıcı kargo numarasını girdikten sonra detayları görselleştirmek için tetiklenir.
    this.isButtonClicked = true;
  }

  ngDoCheck() {
    if(this.trackingNumber !== this.oldTrackingnumber){
      this.isButtonClicked = false;
      this.oldTrackingnumber = this.trackingNumber;
    }
  }



}
