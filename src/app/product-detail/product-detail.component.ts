import { Component, Input } from '@angular/core';
import { Products } from '../Models/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {

  @Input()  product: Products;

}
