import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';
import * as Actions from '../store/actions/tutorial.actions'
import { ProductInterface } from '../interface/product-interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addProduct(name,price,quantity){
    // this.store.dispatch(new Actions.AddProduct({
    //   name: name,
    //   price: price,
    //   quantity: quantity,
    // }))
    this.store.dispatch({
      type: 'ADD_PRODUCT',
      payload: <ProductInterface>{
        name: name,
        price: price,
        quantity: quantity,
      }
    })
    this.store.subscribe((response) => {
      console.log(response)
    })
  }

}
