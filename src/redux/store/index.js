import {configureStore} from "@reduxjs/toolkit";
import {taskReducer} from "../slices/task.js";
import {persistReducer, persistStore} from "redux-persist";
import {persistConfig} from "../config/persistor.js";


const persistedTaskReducer = persistReducer(persistConfig, taskReducer)

export const store = configureStore({
    reducer: {
        tasks: persistedTaskReducer
    }
})

export const persistor = persistStore(store)