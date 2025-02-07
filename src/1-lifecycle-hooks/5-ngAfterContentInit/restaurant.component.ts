import { Component, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements AfterContentInit {
  @ContentChild(MenuComponent) menuComponent!: MenuComponent;

  ngAfterContentInit() {
    if (this.menuComponent) {
      // Menu içeriği yüklendiğinde, menüdeki öğe sayısını al
      const menuItems = this.menuComponent.menuItems.length;
      console.log('Menüdeki öğe sayısı:', menuItems);
    }
  }
}
