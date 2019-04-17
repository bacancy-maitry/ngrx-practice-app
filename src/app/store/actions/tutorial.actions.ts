import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { TutorialInterface } from 'src/app/interface/tutorial-interface';
import { ProductInterface } from 'src/app/interface/product-interface';

export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'

export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: TutorialInterface) { }
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) { }
}
export type Actions = AddTutorial | RemoveTutorial



export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export class AddProduct implements Action{
    readonly type = ADD_PRODUCT

    constructor(public payload: ProductInterface){}
}

export class RemoveProduct implements Action{
    readonly type = REMOVE_PRODUCT

    constructor(public payload: number){}
}

export type ProductActions = AddProduct | RemoveProduct