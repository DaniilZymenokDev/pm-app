import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// const initialState={
//     connectionName:'',
//     dataSource:'',
//     createdBy:'',
//     createdOn:'',
// }
export type Parameter = {
    param_id: number,
    param_value: string
}
export type Connection = {
    name: string,
    data_source: string,
    created_by: string,
    created_on: string,
    connection_string: string,
    parameters: Array<Parameter>,
    project_id: string,
    user_name: string,
    password: string,
}

export const initialState: Array<Connection> = [];

const connectionsReducer = createSlice({
    name: 'projectsConnections',
    initialState: initialState,
    reducers: {
        addConnection: (state, action: PayloadAction<Connection>) => {
            state.push(action.payload);
        },
        addManyConnections: (state, action: PayloadAction<Array<Connection>>) => {
            //TODO:rewrite with concat-method
            action.payload.map((item) => (
                state.push(item)
            ))
        }
    }
});
export const connectionsReducerActions = connectionsReducer.actions;
export const {addConnection, addManyConnections} = connectionsReducerActions;
export default connectionsReducer.reducer;