import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// const initialState={
//     connectionName:'',
//     dataSource:'',
//     createdBy:'',
//     createdOn:'',
// }
type Connections = {
    connectionName: string,
    dataSource: string,
    createdBy: [string, string],
    createdOn: number,
}
type ConnectionsState = {
    list: Connections[];
}

const initialState: ConnectionsState = {
    list: [],
}

const connectionsReducer = createSlice({
    name: 'projectsConnections',
    initialState: initialState,
    reducers: {
        addConnection: (state, action:PayloadAction<Array<Connections>>) => {
            state.list = [...state.list, ...action.payload];
        }
    }
});
export const {addConnection} = connectionsReducer.actions;
export default connectionsReducer.reducer;