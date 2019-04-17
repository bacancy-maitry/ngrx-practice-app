import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { tutorialReducer, productReducer } from './store/reducers/tutorial.reducers';
import { ReadTutorialComponent } from './read-tutorial/read-tutorial.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DisplayProductComponent } from './display-product/display-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadTutorialComponent,
    AddTutorialComponent,
    AddProductComponent,
    DisplayProductComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: tutorialReducer,
      product: productReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
