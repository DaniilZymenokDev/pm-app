import {configureStore} from "@reduxjs/toolkit";
import connectionsReducer from './connectionsSlice';
import counterSlice from "./counterSlice";

const store = configureStore({
    reducer:{
        projectsConnections:connectionsReducer,
        counterReducer: counterSlice //!!!
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;