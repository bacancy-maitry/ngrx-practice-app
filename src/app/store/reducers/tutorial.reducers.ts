import { Action } from "@ngrx/store";
import { TutorialInterface } from "src/app/interface/tutorial-interface";
import * as TutorialActions from './../actions/tutorial.actions'

export const initialState: TutorialInterface = {
    name: 'Initial State',
    url: 'http://www.google.com',
}

export function tutorialReducer(state: TutorialInterface[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];
        case TutorialActions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}