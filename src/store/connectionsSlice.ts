import {createSlice} from "@reduxjs/toolkit";

// const initialState={
//     connectionName:'',
//     dataSource:'',
//     createdBy:'',
//     createdOn:'',
// }

const connectionsReducer = createSlice({
    name:'projectsConnections',
    initialState:{
        connections:[],
    },
    reducers:{

    }
})