import { Component } from '@angular/core';
import { BasketService } from './basket.service';
import { BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  standalone: false,
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  
  constructor(public basketService: BasketService){}
  
  incrementQuantity(item: BasketItem){
    this.basketService.addItemToBasket(item);
  }

  removeItem(id: number, quantity: number){
    this.basketService.removeItemFromBasket(id, quantity);
  }

}
