import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const counterReducer = createSlice({
    name: 'projectsConnections',
    initialState: {
        counter:0,
    },
    reducers: {
        plus:(state, action:PayloadAction<number>)=>{
            state.counter=action.payload;
            console.log(state.counter)
        }
    }
});
export const counterReducerActions = counterReducer.actions;
export const {plus} = counterReducerActions;
export default counterReducer.reducer;