import { Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { DataServiceService } from '../Services/data-service.service';
import { CartServiceService } from '../Services/cart-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  @Input() searchText: string = '';

  // selectedProducts: Products;
  products!: any[];

  constructor(private dataService: DataServiceService, private headerService: HomeServiceService, private cartService: CartServiceService) {}

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }

  addToCart() {
    this.cartService.addToCart(this.products);
  }


}


// Product = [
//   {
//     id: 1,
//     name: 'addidas New Hammer sole for Sports person',
//     description: 'Description for Product 1',
//     brand: 'Brand A',
//     gender: 'Male',
//     category: 'Shoes',
//     size: 'Medium',
//     color: ['blue', 'orange', 'black', 'red'],
//     price: 150,
//     discountPrice: 3,
//     is_in_inventory: true,
//     items_left: 10,
//     imageURL: '../../assets/img/product/p1.jpg',
//     slug: 'product-1',
//   },
//   {
//     id: 2,
//     name: 'addidas New Hammer sole for Sports person',
//     description: 'Description for Product 2',
//     brand: 'Brand B',
//     gender: 'Female',
//     category: 'Shoes',
//     size: '7',
//     color: ['blue', 'orange', 'black', 'red'],
//     price: 150,
//     is_in_inventory: true,
//     items_left: 5,
//     imageURL: '../../assets/img/product/p2.jpg',
//     slug: 'product-2',
//   },
//   {
//     id: 3,
//     name: 'addidas New Hammer sole for Sports person',
//     description: 'Description for Product 3',
//     brand: 'Brand C',
//     gender: 'Unisex',
//     category: 'Accessories',
//     size: 'One Size',
//     color: ['blue', 'orange', 'black', 'red'],
//     price: 150,
//     discountPrice: 3,
//     is_in_inventory: false,
//     items_left: 0,
//     imageURL: '../../assets/img/product/p3.jpg',
//     slug: 'product-3',
//   },
//   {
//     id: 4,
//     name: 'addidas New Hammer sole for Sports person',
//     description: 'Description for Product 4',
//     brand: 'Brand AB',
//     gender: 'Male',
//     category: 'Shoes',
//     size: 'Medium',
//     color: ['blue', 'orange', 'black', 'red'],
//     price: 150,
//     is_in_inventory: true,
//     items_left: 10,
//     imageURL: '../../assets/img/product/p4.jpg',
//     slug: 'product-1',
//   },
//   {
//     id: 5,
//     name: 'addidas New Hammer sole for Sports person',
//     description: 'Description for Product 5',
//     brand: 'Brand ABC',
//     gender: 'Male',
//     category: 'Shoes',
//     size: 'Medium',
//     color: ['blue', 'orange', 'black', 'red'],
//     price: 119.99,
//     discountPrice: 3,
//     is_in_inventory: true,
//     items_left: 10,
//     imageURL: '../../assets/img/product/p5.jpg',
//     slug: 'product-1',
//   },
//   {
//     id: 6,
//     name: 'addidas New Hammer sole for Sports person',
//     description: 'Description for Product 6',
//     brand: 'Brand A',
//     gender: 'Male',
//     category: 'Clothing',
//     size: 'Medium',
//     color: ['blue', 'orange', 'black', 'red'],
//     price: 150,
//     is_in_inventory: false,
//     items_left: 10,
//     imageURL: '../../assets/img/product/p5.jpg',
//     slug: 'product-1',
//   },
//   {
//     id: 7,
//     name: 'addidas New Hammer sole for Sports person',
//     description: 'Description for Product 7',
//     brand: 'Brand ABCDE',
//     gender: 'Male',
//     category: 'Clothing',
//     size: 'Medium',
//     color: ['blue', 'orange', 'black', 'red'],
//     price: 29.99,
//     is_in_inventory: true,
//     items_left: 10,
//     imageURL: '../../assets/img/product/p7.jpg',
//     slug: 'product-1',
//   },
//   {
//     id: 8,
//     name: 'addidas New Hammer sole for Sports person',
//     description: 'Description for Product 8',
//     brand: 'Brand A',
//     gender: 'Male',
//     category: 'Clothing',
//     size: 'Medium',
//     color: ['blue', 'orange', 'black', 'red'],
//     price: 29.99,
//     discountPrice: 3,
//     is_in_inventory: true,
//     items_left: 10,
//     imageURL: '../../assets/img/product/p8.jpg',
//     slug: 'product-1',
//   }
// ];


// products: string[] = []; // Assuming products is an array of strings
// filteredProducts: string[] = [];

// ngOnChanges() {
//   this.filteredProducts = this.products.filter(product =>
//     product.toLowerCase().includes(this.searchText.toLowerCase())
//   );
// }

// @Input() searchText: string = '';

// filteredProducts = [];

// constructor(private headerService: HomeServiceService) {}

// addToCart(product) {
//   // this.cartService.addToCart(product);
//   this.headerService.increaseCount();
// }
