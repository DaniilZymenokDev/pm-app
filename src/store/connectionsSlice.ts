import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// const initialState={
//     connectionName:'',
//     dataSource:'',
//     createdBy:'',
//     createdOn:'',
// }
export type Connection = {
    connectionName: string,
    dataSource: string,
    createdBy: string,
    createdOn: string,
    userName: string,
    password: string,
    configuration:string,
    connectionString: string,
}
// type ConnectionState = {
//     list: Array<Connection>
// }

export const initialState: Array<Connection> = [];

const connectionsReducer = createSlice({
    name: 'projectsConnections',
    initialState: initialState,
    reducers: {
        addConnection:(state, action:PayloadAction<Connection>)=>{
            console.log(action.payload)
            state.push(action.payload);
            console.log(state);
        }
    }
});
export const connectionsReducerActions = connectionsReducer.actions;
export const {addConnection} = connectionsReducerActions;
export default connectionsReducer.reducer;