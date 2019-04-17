import { Component, OnInit } from '@angular/core';
import * as TutorialActions from '../store/actions/tutorial.actions'
import { Store } from '@ngrx/store';
import { AppState } from '../store/state/app.state';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ 
      name: name, 
      url: url
     }))
    this.store.subscribe((response) => {
      console.log("Add", response)
    })
  }

  ngOnInit() {
  }

}
