import { Action } from "@ngrx/store";
import { TutorialInterface } from "src/app/interface/tutorial-interface";
import * as Actions from './../actions/tutorial.actions'
import { ProductInterface } from "src/app/interface/product-interface";

export const initialState: TutorialInterface = {
    name: 'Initial State',
    url: 'http://www.google.com',
}

export function tutorialReducer(state: TutorialInterface[] = [initialState], action: Actions.Actions) {
    switch (action.type) {
        case Actions.ADD_TUTORIAL:
            return [...state, action.payload];
        case Actions.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}

export function productReducer(state: ProductInterface[] = [], action: Actions.ProductActions) {
    switch (action.type) {
        case Actions.ADD_PRODUCT:
            return [...state, action.payload];
        // case Actions.REMOVE_PRODUCT:
        //     state.splice(action.payload, 1)
        //     return state
        default:
            return state
    }
}