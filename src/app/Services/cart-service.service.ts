import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private totalItems: number = 0;
   private cartItems: any[] = [];

   constructor() {
    // Check if localStorage is supported
    if (typeof localStorage !== 'undefined') {
      // Retrieve totalItems from local storage if available
      const savedItems = localStorage.getItem('totalItems');
      this.totalItems = savedItems ? parseInt(savedItems, 10) : 0;
  
      // Retrieve cartItems from local storage if available
      const savedCartItems = localStorage.getItem('cartItems');
      this.cartItems = savedCartItems ? JSON.parse(savedCartItems) : [];
    } else {
      console.warn('localStorage is not supported.');
    }
  }
  
  addToCart(product: any) {
    this.totalItems++;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('totalItems', this.totalItems.toString());
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    } else {
      console.warn('localStorage is not supported.');
    }
  
    this.cartItems.push(product);
    console.log(this.totalItems);
    console.log(this.cartItems);
  }
  

  getTotalItems() {
    return this.totalItems;
  }

  addItemToCart(product: any) {
    // Implement logic to add the selected product to the cart
  }
}
