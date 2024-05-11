import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HomeServiceService } from '../Services/home-service.service';
import { DataServiceService } from '../Services/data-service.service';
import { CartServiceService } from '../Services/cart-service.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(private headerService: HomeServiceService, private dataService: DataServiceService, public cartService: CartServiceService) {}

  ngDoCheck() {
    this.updateTotalItems();
    console.log(this.totalItems);
  }

  updateTotalItems() {
    // Get total items from the cart service
    this.totalItems = this.cartService.getTotalItems();

    // Update totalItems if localStorage is not available
    if (typeof localStorage === 'undefined') {
      console.warn('localStorage is not supported.');
      console.log(this.totalItems);
      this.totalItems = 0;
    }
  }

  search(){
    const query = this.searchQuery.toLowerCase().trim();
    if(query === ''){
      this.searchResults = []
    } else {
      this.searchResults = this.dataService.getProducts().filter((product) => 
      product.name.toLowerCase().includes(query) || product.category.toLowerCase().includes(query)
      );
    }
  }

  totalItems: number;
}




  // onSearchTextChange(){
    // const search = event.target.value;
    // this.searchTextEvent.emit(this.searchText);
    // console.log(search);
  // }

  // updateSearchText(inputEl: HTMLInputElement){
    // // this.searchText = event.target.value;
    // console.log(inputEl.value);
    // this.searchText = inputEl.value;
    // this.searchTextEvent.emit(this.searchText);
  // }