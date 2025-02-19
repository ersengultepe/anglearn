import {Component, computed, linkedSignal, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: "app-signals",
  template: `
    <label for="quantity">Miktar  </label>
    <input type="number" id="quantity" [ngModel]="quantity()" (ngModelChange)="quantity.set($event)" placeholder="Miktar Yaz">
<br>
<br>
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

  constructor() {
    this.quantity.set(35)
    console.info("quantity set first: ", this.quantity())
    //işlemler....
    this.quantity.set(this.quantity() + 5)
    console.info("quantity set second: ", this.quantity())
    //update
    this.quantity.update(value => value + 20)
    console.info("quantity update: ", this.quantity());
  }

  tax:number = 1.20
  quantity = signal<number>(0)
  unitPrice = signal<number>(0)
  amount = computed(() => this.quantity() * this.unitPrice() * this.tax)
  balance = computed(() => this.debt() - this.amount())
  debt= signal(500)

  balanceReset() {
    this.balance = linkedSignal(() => 0)
    // this.balance.set()

    this.quantity.set(3)

  }
}
