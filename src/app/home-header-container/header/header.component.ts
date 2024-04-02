import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchText: string = '';

  @Input() itemCount: number = 0;

  @Output() searchTextEvent: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(){
    // const search = event.target.value;
    this.searchTextEvent.emit(this.searchText);
    // console.log(search);
  }

  updateSearchText(inputEl: HTMLInputElement){
    // // this.searchText = event.target.value;
    // console.log(inputEl.value);
    // this.searchText = inputEl.value;
    // this.searchTextEvent.emit(this.searchText);
  }  
}
