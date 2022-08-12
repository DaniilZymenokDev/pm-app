import {configureStore} from "@reduxjs/toolkit";
import connectionsReducer from './connectionsSlice';

const store = configureStore({
    reducer:{
        projectsConnections:connectionsReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;