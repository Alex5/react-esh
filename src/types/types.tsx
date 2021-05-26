export interface IIngredient {
    _id: number,
    countName: string,
    countNames: [string],
    name: string,
    count: number,
    exclude?: boolean
}

export interface IChip {
    id: number,
    name: string,
    exclude?: boolean
}

export interface IItems {
    id: number,
    name: string
}

export interface IRecFromIng {
    items: IItems[],
    total: number
}