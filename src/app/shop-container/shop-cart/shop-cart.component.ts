import { Component } from '@angular/core';
import { CartServiceService } from '../../Services/cart-service.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrl: './shop-cart.component.css'
})
export class ShopCartComponent {

  cartItems: any;
  cartProducts: any;

  constructor(private cartService: CartServiceService) {
    this.cartItems = this.cartService.getTotalItems();
    // this.cartProducts.getTotalItems();
  }
}
