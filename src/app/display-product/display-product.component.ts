import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interface/product-interface';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  products: Observable<ProductInterface[]>;

  constructor(private store: Store<AppState>) { 
    this.products = this.store.select('product')
  }

  ngOnInit() {
  }

}
