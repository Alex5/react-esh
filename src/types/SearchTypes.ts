import {IChip, IIngredient} from "./types";

export interface ISearchState {
    search: {
        inputIngValue: string
        foundIngredients: IIngredient[]
        chipItems: IChip[]
    }
}

export interface IServicesState {
    services: {
        activePopup: boolean
    }
}