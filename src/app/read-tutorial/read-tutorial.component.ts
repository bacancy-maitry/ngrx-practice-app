import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store'
import { TutorialInterface } from '../interface/tutorial-interface';
import { AppState } from '../store/state/app.state';
import * as TutorialActions from '../store/actions/tutorial.actions'

@Component({
  selector: 'app-read-tutorial',
  templateUrl: './read-tutorial.component.html',
  styleUrls: ['./read-tutorial.component.css']
})
export class ReadTutorialComponent implements OnInit {

  tutorials: Observable<TutorialInterface[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = this.store.select('tutorial') //tutorial comes from app module.ts
    console.log(this.tutorials)
  }

  deleteTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }

  ngOnInit() {
  }

}
