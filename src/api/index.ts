import axios from "axios";
import {Connection} from "../store/connectionsSlice";

const getConnections = async () =>
    (await axios.get('https://testapi.goblitz.ai/facade/dataconnection/all', {
        params: {
            project_id: '00d449f5-2e2a-44ad-8f7a-8335cdc6f98b',
        }
    })).data

const addConnection = async (body:Connection) =>
    (await axios.post('http://testapi.goblitz.ai/facade/dataconnection', {
        body
    }))

export {getConnections, addConnection};