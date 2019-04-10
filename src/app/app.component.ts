import { Component } from '@angular/core';
import { TutorialInterface } from './interface/tutorial-interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { AppState } from './store/state/app.state';
import * as TutorialActions from './store/actions/tutorial.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  tutorials: Observable<TutorialInterface[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial')
    console.log(this.tutorials)
  }

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
    console.log(name, url)
  }

  deleteTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
}
