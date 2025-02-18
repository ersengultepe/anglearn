import {Component, computed, linkedSignal, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: "app-signals",
  template: `
    <label for="quantity">Miktar  </label>
    <input type="number" id="quantity" [ngModel]="quantity()" (ngModelChange)="quantity.set($event)" placeholder="Miktar Yaz">

    <label for="unitPrice">Birim Fiyat  </label>
    <input type="text" id="unitPrice" [ngModel]="unitPrice()" (ngModelChange)="unitPrice.set($event)" placeholder="Birim Fiyat Yaz">

    <p>
      Tutar: {{ amount() }} <br>
      Borç: {{ debt() }} <br>
      Bakiye: {{ balance() }}
      <button type="submit" (click)="balanceReset()"> Sıfırla </button> <br>
    </p>

  `,
  imports: [
    FormsModule
  ],
  standalone: true
})

export class SignalsComponent{

  quantity = signal<number>(0)
  unitPrice = signal<number>(0)
  amount = computed(() => this.quantity() * this.unitPrice())
  balance = computed(() => this.debt() - this.amount())
  debt= signal(500)

  balanceReset() {
    this.balance = linkedSignal(() => 0)
    // this.balance.set()

    this.quantity.set(3)
  }
}
