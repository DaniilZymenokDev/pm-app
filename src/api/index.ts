import axios from "axios";

const getConnections = async () =>
    (await axios.get('https://testapi.goblitz.ai/facade/dataconnection/all', {
        params: {
            project_id: '00d449f5-2e2a-44ad-8f7a-8335cdc6f98b',
        }
    })).data
const addConnection = async () =>
    (await axios.post('http://testapi.goblitz.ai/facade/dataconnection', {
        body: {
            "datasource_id": 1,
            "name": "for testing",
            "connection_string": "connection string ww",
            "project_id":"00d449f5-2e2a-44ad-8f7a-8335cdc6f98b",
            "parameters": [{
                "param_id": 2,
                "param_value": "balaji"
            },
                {
                    "param_id": 3,
                    "param_value": "password"
                }
            ]
        }
    }))


export {getConnections, addConnection};

