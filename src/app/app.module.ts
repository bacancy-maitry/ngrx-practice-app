import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { tutorialReducer } from './store/reducers/tutorial.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      tutorial: tutorialReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
