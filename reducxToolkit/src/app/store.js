import {configureStore} from "@reduxjs/toolkit";
import todoReducer from '../feautres/Todo/TodoSlice'

export const store = configureStore({
    reducer: todoReducer
})