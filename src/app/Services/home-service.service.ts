import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  private countSource = new BehaviorSubject<number>(0);
  count$ = this.countSource.asObservable();
  private localStorageKey = 'cartItemCount';

  constructor() {
    // Initialize count from localStorage if available
    // if (this.isLocalStorageAvailable()) {
    //   const savedCount = localStorage.getItem(this.localStorageKey);
    //   if (savedCount) {
    //     this.countSource.next(parseInt(savedCount, 10));
    //   }
    // }
  }

  increaseCount() {
    const newCount = this.countSource.value + 1;
    this.countSource.next(newCount);
    // Store count in localStorage if available
    // if (this.isLocalStorageAvailable()) {
    //   localStorage.setItem(this.localStorageKey, newCount.toString());
    // }
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  }
}
