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
    configuration: string,
    connectionString: string,
}

export const initialState: Array<Connection> = [];

const connectionsReducer = createSlice({
    name: 'projectsConnections',
    initialState: initialState,
    reducers: {
        addConnection: (state, action: PayloadAction<Connection>) => {
            state.push(action.payload);
        }
    }
});
export const connectionsReducerActions = connectionsReducer.actions;
export const {addConnection} = connectionsReducerActions;
export default connectionsReducer.reducer;