import {IElement} from "../interfaces/element";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {newElement} from "../constructor/newElement";

export type IngredientsSlice = IElement[];

interface SetIngredient {
    key: number,
    element: IElement,
}

type ClearIngredient = number

export const maxIngredients = 3;

const initialState: IngredientsSlice = [];

for (let i = 0; i < maxIngredients; i++) {
    initialState[i] = newElement()
}

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState: initialState,
    reducers: {
        setElement: (state: IngredientsSlice, action: PayloadAction<SetIngredient>) => {
            state[action.payload.key] = action.payload.element
        },
        clearElement: (state: IngredientsSlice, action: PayloadAction<ClearIngredient>) => {
            state[action.payload] = newElement()
        },
        clearAll: (state: IngredientsSlice) => {
            for (let i=0; i<maxIngredients; i++) {
                state[i] = newElement()
            }
        },
    }
})

export default ingredientsSlice.reducer

export const {setElement, clearElement, clearAll} = ingredientsSlice.actions
