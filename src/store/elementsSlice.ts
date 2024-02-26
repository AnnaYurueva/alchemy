import {createSlice} from "@reduxjs/toolkit";
import {IElement} from "../interfaces/element";
import {newElement} from "../constructor/newElement";

interface IState {
    elements: IElement[],
    openRecipes: number
}

const getLocalStorageElements = localStorage.getItem('elements');

const elementsState: IElement[] = getLocalStorageElements !== null ? JSON.parse(getLocalStorageElements) : [
    {id: 'water', name: 'вода', icon: '💧'},
    {id: 'fire', name: 'огонь', icon: '🔥'},
    {id: 'air', name: 'воздух', icon: '💨'},
    {id: 'earth', name: 'земля', icon: '🌱'},
];

const counter: number = getLocalStorageElements !== null ? elementsState.length - 4 : 0;

const initialState: IState = {
    elements: elementsState,
    openRecipes: counter,
}

const elementsSlice = createSlice({
    name: 'elements',
    initialState: initialState,
    reducers: {
        writeNewElement: (state, action) => {
            if (state.elements.find((item: IElement) => item.id === action.payload.id)) return alert('Такой элемент уже найден');

            action.payload = newElement(action.payload.id, action.payload.name, action.payload.icon);
            state.openRecipes += 1;
            state.elements = [...state.elements, action.payload];
            localStorage.setItem('elements', JSON.stringify(state.elements));
        },
    },
})

export default elementsSlice.reducer

export const {writeNewElement} = elementsSlice.actions
