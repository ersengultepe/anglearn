import { Component, AfterViewChecked } from '@angular/core';

interface sayac{
  id:number
  title:string
}

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements AfterViewChecked {
  counter: number = 0;
  a!:sayac

  increaseCounter() {
    this.counter++;
    console.log("🚀 Sayaç arttı: ", this.counter);

    this.a.id = 1
    this.a.title = 'asd'
    console.log(this.a)
  }

  ngAfterViewChecked() {
    console.log("🔄 ngAfterViewChecked ÇALIŞTI! - Güncellenen sayaç:", this.counter);
  }
}
