import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  imports: [
    NgForOf
  ]
})

export class MenuComponent {
  menuItems = ['Pizza', 'Pasta', 'Çorba'];
}
