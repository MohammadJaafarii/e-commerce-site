import { Component } from '@angular/core';
import { BasketService } from '../../basket/basket.service';
import { BasketItem } from '../../shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor( public basketService: BasketService){}

  getCount(items: BasketItem[]){
    return items.reduce((sum, item) => sum + item.quantity , 0);
  }

}
