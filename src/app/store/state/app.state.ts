import { TutorialInterface } from "src/app/interface/tutorial-interface";
import { ProductInterface } from "src/app/interface/product-interface";

export interface AppState {
    readonly tutorial: TutorialInterface[];
    readonly product: ProductInterface[];
}