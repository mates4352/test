import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {mainReducer} from "../features/main/Main-slice";


const rootReducer = combineReducers({
  main: mainReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
