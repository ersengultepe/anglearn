import {Component, inject} from '@angular/core';
import {CalculatorService} from './calculator.service';

@Component({
  selector: "app-receipt",
  template: `<h1>The total is {{ totalCost }}</h1>`,
  standalone: true
})

export class ReceiptComponent{
  calculator = inject(CalculatorService)
  totalCost = this.calculator.add(63,25)
}
