import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// const initialState={
//     connectionName:'',
//     dataSource:'',
//     createdBy:'',
//     createdOn:'',
// }
type Connection = {
    connectionName: string,
    dataSource: string,
    createdBy: [string, string],
    createdOn: number,
}
type ConnectionState = {
    list: Connection,
}

const initialState: ConnectionState = {
    list: {
        connectionName: '',
        dataSource: '',
        createdBy: ['', ''],
        createdOn: 0,
    },
}

const connectionsReducer = createSlice({
    name: 'projectsConnections',
    initialState: initialState,
    reducers: {
        addConnectionName:(state, action)=>{
            state.list.connectionName = action.payload;
        },
        addDataSource:(state, action)=>{
            state.list.dataSource = action.payload;
        },
        addCreatedBy:(state, action)=>{
            state.list.createdBy = action.payload;
        },
        addCreatedOn:(state, action)=>{
            state.list.createdOn = action.payload;
        },
    }
});
export const {addConnectionName,addDataSource, addCreatedBy, addCreatedOn} = connectionsReducer.actions;
export default connectionsReducer.reducer;