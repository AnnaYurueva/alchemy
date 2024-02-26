import {configureStore} from "@reduxjs/toolkit";

import elementsReducer from "./elementsSlice";
import ingredientsReducer from "./ingredientsSlice";

export const store = configureStore({
    reducer: {
        elements: elementsReducer,
        ingredients: ingredientsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
