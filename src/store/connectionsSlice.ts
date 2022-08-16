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
    userName: string,
    password: string,
    configuration:object,
    configurationString: string,
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
        userName: '',
        password:'',
        configuration:[],
        configurationString:''
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
        addUserName:(state, action)=>{
            state.list.userName = action.payload;
        },
        addPassword:(state, action)=>{
            state.list.password = action.payload;
        },
        addConfig:(state, action)=>{
            state.list.configuration = action.payload; //rewrite this
        },
        addConfigString:(state, action)=>{
            state.list.configurationString = action.payload;
        },
    }
});
export const {addConnectionName,addDataSource, addCreatedBy, addCreatedOn, addUserName, addPassword} = connectionsReducer.actions;
export const connectionsReducerActions = connectionsReducer.actions;
export default connectionsReducer.reducer;